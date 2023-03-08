import { basename, join } from 'path';
import { pckageIdToName, legally_name_reg, componentIdToName } from '../utils';
import { loadConfig } from '../loader';
import { compileComponent } from './compile-component';
import type { CodeSnippet, ComponentProfile } from '../types';

/**
 * @description 编译包
 * @param {string} packagePath 包地址
 * @return {*}  {(CodeSnippet | undefined)}
 */
export function compilePackage(packagePath: string): CodeSnippet | undefined {
  const configFile = join(packagePath, 'package.xml');
  const config = loadConfig(configFile);
  if(config === undefined) {
    console.log('[加载包配置失败!]');
    return undefined;
  }

  const rootConfig = config.elements?.find(element => element.name === 'packageDescription');
  // 包ID
  const packageID = rootConfig?.attributes?.id;
  if(packageID === undefined) {
    console.log('[包配置解析失败，找不到包`id`!]');
    return undefined;
  }

  // 发布名
  const publishElement = rootConfig?.elements?.find((element) => element.name === 'publish');
  // 包发布名
  const publishName = publishElement?.attributes?.name ?? basename(packagePath);
  // 包别名
  const publishAliasName = pckageIdToName(packageID);

  // 组件代码片段分组
  const group = new Map<string, CodeSnippet[]>();
  rootConfig?.elements
    ?.find((element) => element.name === 'resources')
    ?.elements?.forEach((element) => {
      if(!element.attributes) {
        return;
      }
      const profile = element.attributes as Pick<ComponentProfile, keyof ComponentProfile>;
      profile.tag = element.name;

      // 非自定义组件无需导出
      if(profile.tag !== 'component') {
        return;
      }

      // 自定义组件配置地址
      const componentFile = join(packagePath, profile.path, profile.name);
      // 组件文件名
      const componentFileName = basename(profile.name, '.xml');
      // 组件发布名
      const componentPublishName = legally_name_reg.test(componentFileName)
        ? componentFileName
        : componentIdToName(profile.id);

      // 编译组件
      const component = compileComponent(componentFile, componentPublishName);
      if(component === undefined) {
        return;
      }

      // 组件包内路径
      const internalPackage = profile.path
        .replace(/^[\\\/]+|[\\\/]+$/g, "")
        .replace(/[\\\/]+/g, ".");

      // 分组
      let componentList = group.get(internalPackage);
      if(componentList === undefined) {
        componentList = [];
        group.set(internalPackage, componentList);
      }
      componentList.push(component);
    });
  
  // 包代码
  const packageSnippet: CodeSnippet = [];
  packageSnippet.push(`import ${publishAliasName} = ${publishName};`);
  packageSnippet.push(`namespace ${publishName} {`);
  group.forEach((list, internalPackage) => {
    const internalCodeSnippets = list.flat();
    if(internalPackage.length === 0) {
      packageSnippet.push(internalCodeSnippets);
      return;
    }

    // 分类组件列表
    const classifySnippet: CodeSnippet = [
      `namespace ${internalPackage} {`,
      internalCodeSnippets,
      '}'
    ];
    packageSnippet.push(classifySnippet);
  });
  packageSnippet.push('}');
  return packageSnippet;
}