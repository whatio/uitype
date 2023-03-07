import { basename } from "path";
import type { ComponentAttribute, Component } from "../types";
import { getTagType, legally_name_reg, sys_name_reg } from "../utils";
import { loadConfig, Config } from "./load-config";

/**
 * @description 加载组件
 * @param {string} configFile 组件配置文件
 * @return {*}  {(Component | undefined)}
 */
export function loadComponent(configFile: string): Component | undefined {
  const config = loadConfig(configFile)?.elements?.find(e => e.name === 'component');
  if(!config) {
    console.log('[加载组件配置失败!]');
    return undefined;
  }

  // 解析组件名字
  const name = basename(configFile, '.xml');

  // 解析自定义组件扩展类型
  const tag = config.attributes?.extention ?? config.name;
  const extention = getTagType(tag);

  // 解析属性列表
  const attributes: ComponentAttribute[] = [];
  config.elements?.forEach(cfg => {
    switch(cfg.name) {
      case 'controller':
      case 'transition':
        const attribute = getAttribute(cfg);
        if(attribute !== undefined) {
          attributes.push(attribute);
        }
        break;
      case 'displayList':
        cfg.elements?.forEach(e => {
          const attribute = getAttribute(e);
          if(attribute !== undefined) {
            attributes.push(attribute);
          }
        })
        break;
    }
  });

  const component: Component = { name, extention, attributes };
  return component;
}

/**
 * @description 获取属性
 * @param {Config} config
 * @return {*}  {(ComponentAttribute | undefined)}
 */
function getAttribute(config: Config): ComponentAttribute | undefined {
  const attribute = config.attributes as {
    -readonly [P in keyof ComponentAttribute]: ComponentAttribute[P];
  } | undefined;

  if(!attribute) {
    return undefined;
  }

  // 剔除名称不合法的属性
  if(legally_name_reg.test(attribute.name) === false || sys_name_reg.test(attribute.name) === true) {
    return undefined;
  }
  attribute.tag = config.name;
  return attribute;
}

