import { basename, join } from 'path';
import { existsSync, readdirSync } from 'fs';
import { componentIdToName, pckageIdToName, legally_name_reg } from '../utils';
import { loadConfig } from '../loader';
import type { ComponentProfile } from '../component';
import type { Package } from './types';

/**
 * @description 加载包
 * @param {string} packagePath 包目录地址
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

  // 自定义组件映射列表
  const componentMap = new Map<string, ComponentProfile>();
  rootConfig?.elements?.find((element) => element.name === "resources")?.elements?.forEach(element => {

    // 非自定义组件无需导出
    if(element.name !== "component" || element.attributes === undefined) {
      return;
    }

    // 解析组件profile
    const profile = element.attributes as Pick<ComponentProfile, keyof ComponentProfile>;
    
    // 组件包内路径
    const internalPackage = profile.path.replace(/^[\\\/]+|[\\\/]+$/g, "").replace(/[\\\/]+/g, ".");
    profile.internalPackage = internalPackage;

    // 组件发布名
    let componentName = basename(profile.name, ".xml");
    if (legally_name_reg.test(componentName) === false) {
      componentName = componentIdToName(profile.id);
    }
    profile.publishName = componentName;
    componentMap.set(profile.id, profile);
  });

  return { id, name, aliasName, componentMap, packagePath };
}

/**
 * @description 加载包映射
 * - { 包ID: Package}
 * @param {string} assetsPath 包资源根路径
 * @param {string[]} [include] 如果设置此参数，则仅加载被指定的包
 * @param {string[]} [exclude] 如果设置此参数，则不加载被指定的包
 * @return {*}  {(Map<string, Package> | undefined)}
 */
export function loadPackageMap(assetsPath: string, include?: string[], exclude?: string[]): Map<string, Package> | undefined {
  // 检查资源目录
  if(existsSync(assetsPath) === false) {
    console.log('找不到项目资源目录！ assetsPath: ' + assetsPath);
    return undefined;
  }

  // 加载映射列表
  const packageMap = new Map<string, Package>();
  readdirSync(assetsPath).forEach(name => {
    if(exclude?.length && exclude.includes(name)) {
      return;
    }
    if(include?.length && include.includes(name) === false) {
      return;
    }
    const packagePath = join(assetsPath, name);
    const pkg = loadPackage(packagePath);
    if(pkg !== undefined) {
      packageMap.set(pkg.id, pkg);
    }
  });
  return packageMap;
}