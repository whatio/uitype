import { basename, join } from 'path';
import { existsSync, readdirSync } from 'fs';
import { componentIdToName, pckageIdToName, legally_name_reg } from '../utils';
import { loadConfig } from '../loader';
import { tagTypeOf } from './tag-type-of';
import { loadComponent } from './load-component';
import type { Component, ComponentProfile, Package } from './types';

/**
 * @description 加载组件包
 * @param {string} packagePath 组件包路径地址
 * @return {*}  {(Package | undefined)}
 */
export function loadPackage(packagePath: string): Package | undefined {
  const configFile = join(packagePath, 'package.xml');
  const config = loadConfig(configFile);
  if(config === undefined) {
    console.log('[加载包配置失败!]');
    return undefined;
  }

  // 解析配置
  const rootConfig = config.elements?.find(element => element.name === 'packageDescription');
  const id = rootConfig?.attributes?.id;
  if(id === undefined) {
    console.log('[包配置解析失败，找不到包`id`!]');
    return undefined;
  }

  // 包发布别名
  const aliasName = pckageIdToName(id);

  // 包发布名称
  let name = rootConfig?.elements?.find((element) => element.name === 'publish')?.attributes?.name;
  if(!name?.length) {
    name = basename(packagePath);
  }
  if(legally_name_reg.test(name) === false) {
    name = aliasName;
  }

  // 组件引用类型地址映射列表 - {组件ID: 组件引用类型地址}
  const referenceMap = new Map<string, string>();
  // 待导出的自定义组件列表映射 - { 包内引用地址: Component[] }
  const componentListMap = new Map<string, Component[]>();

  // 解析组件列表
  rootConfig?.elements?.find((element) => element.name === "resources")?.elements?.forEach(element => {
    // 非法组件
    if(element.attributes === undefined) {
      return;
    }
    
    // 解析内置组件类型
    const profile = element.attributes as Pick<ComponentProfile, keyof ComponentProfile>;
    if(element.name !== "component") {
      const tagType = tagTypeOf(element.name);
      referenceMap.set(profile.id, tagType);
      return;
    }
    
    // 加载组件
    const componentFile = join(packagePath, profile.path, profile.name);
    const component = loadComponent(componentFile);
    if(!component) {
      return;
    }
    
    // 组件没有合法属性时，其扩展类型为组件类型
    if(typeof component === 'string') {
      referenceMap.set(profile.id, component);
      return;
    }

    // 设置组件包内引用路径
    const internalPkg = profile.path.replace(/^[\\\/]+|[\\\/]+$/g, "").replace(/[\\\/]+/g, ".");
    component.internalPackage = internalPkg;
    // 设置组件发布名
    let cname = basename(profile.name, ".xml");
    if (legally_name_reg.test(cname) === false) {
      cname = componentIdToName(profile.id);
    }
    component.publishName = cname;
    // 完整的包引用地址路径
    const fullPkg = internalPkg.length > 0 ? `${name}.${internalPkg}.${cname}`: `${name}.${cname}`;
    referenceMap.set(profile.id, fullPkg);

    let list = componentListMap.get(internalPkg);
    if(list === undefined) {
      list = [];
      componentListMap.set(internalPkg, list);
    }
    list.push(component);
  });

  return { id, name, aliasName, referenceMap, componentListMap };
}

/**
 * @description 加载组件包映射列表
 * @param {string} packageRoot 组件包资源根路径
 * @param {string[]} [include] 如果设置此参数，则仅加载被指定的包
 * @param {string[]} [exclude] 如果设置此参数，则不加载被指定的包
 * @return {*}  {(Map<string, Package> | undefined)}
 */
export function loadPackageList(packageRoot: string, include?: string[], exclude?: string[]): Package[] | undefined {
  // 检查资源目录
  if(existsSync(packageRoot) === false) {
    console.log('找不到项目资源目录！ assetsPath: ' + packageRoot);
    return undefined;
  }

  // 组件包文件夹列表
  let packageDirs = readdirSync(packageRoot);
  // 筛选组件包
  if(include?.length) {
    packageDirs = packageDirs.filter(dir => include.includes(dir));
  }
  if(exclude?.length) {
    packageDirs = packageDirs.filter(dir => exclude.includes(dir) === false)
  }

  const packages = packageDirs
    .map(dir => loadPackage(join(packageRoot, dir)))
    .filter(pkg => pkg !== undefined) as Package[];
  return packages;
}