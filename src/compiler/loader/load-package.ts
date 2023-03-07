import { basename, dirname, join } from "path";
import type { Component, ComponentProfile, Package } from "../types";
import { getTagType, idToName, legally_name_reg } from "../utils";
import { loadComponent } from "./load-component";
import { loadConfig } from "./load-config";

/**
 * @description 加载包
 * @param {string} configFile 包配置文件地址
 * @return {*}  {(Package | undefined)}
 */
export function loadPackage(configFile: string): Package | undefined {
  const config = loadConfig(configFile);
  if(config === undefined) {
    console.log('[加载包配置失败!]');
    return undefined;
  }

  // 包目录地址
  const packageDirectory = dirname(configFile);
  // 包名
  const packageName = basename(packageDirectory);
  const rootConfig = config.elements?.find(element => element.name === 'packageDescription');
  // 包ID
  const packageID = rootConfig?.attributes?.id;
  if(packageID === undefined) {
    console.log('[包配置解析失败，找不到包`id`!]');
    return undefined;
  }

  // 组件类型映射
  const componentPathMap = new Map<string, string>();
  // 组件
  const componentExportTree = new Map<string, Component[]>();

  // 加载组件列表
  rootConfig?.elements
    ?.find((element) => element.name === "resources")
    ?.elements?.forEach((element) => {
      if(!element.attributes) {
        return;
      }
      element.attributes.tag = element.name;
      const profile = element.attributes as Pick<ComponentProfile, keyof ComponentProfile>;

      // 处理内置类型组件
      if(profile.tag !== 'component') {
        const buildInType = getTagType(profile.tag);
        componentPathMap.set(profile.id, buildInType);
        return;
      }

      // 处理自定义组件
      const componentFile = join(packageDirectory, profile.path, profile.name);
      const component = loadComponent(componentFile);
      if(component === undefined) {
        return;
      }

      // 属性列表为空的组件只导出扩展类型
      if(component.attributes.length === 0) {
        componentPathMap.set(profile.id, component.extention);
        return;
      }

      // 不合规的名字以ID代替
      if(legally_name_reg.test(component.name) === false) {
        component.name = idToName(profile.id);
      }

      // 包内引用路径
      const internalPath = profile.path.replace(/^[\\\/]+|[\\\/]+$/g, '').replace(/[\\\/]+/g, '.');
      
      // 组件引用地址
      const componentPath = join(packageName, profile.path, component.name).replace(/[\\\/]+/g, '.');
      componentPathMap.set(profile.id, componentPath);


    });

}