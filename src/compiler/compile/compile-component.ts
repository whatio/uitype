import type { CodeSnippet, ComponentAttribute } from "../types";
import { file_extension, getTagType, idToName, legally_name_reg, sys_name_reg } from "../utils";
import { loadConfig, Config } from "../loader/load-config";
import { basename } from "path";




export function compileComponent(configFile: string, publishName: string): CodeSnippet | undefined;
export function compileComponent(config: Config, publishName: string): CodeSnippet | undefined;
export function compileComponent(data: string | Config, publishName: string): CodeSnippet | undefined {
  const fileConfig = typeof data === 'string' ? loadConfig(data) : data;
  const config = fileConfig?.elements?.find(e => e.name === 'component');
  if(!config) {
    console.log('[加载组件配置失败!]');
    return undefined;
  }

  // 解析自定义组件扩展类型
  const tag = config.attributes?.extention ?? config.name;
  const extention = getTagType(tag);

  // 解析显示列表
  const displayList = config.elements
    ?.find(cfg => cfg.name === "displayList")
    ?.elements?.map(cfg => {
      const attribute = getAttribute(cfg);
      if(attribute === undefined) {
        return undefined;
      }

      // 内置类型的属性
      if(attribute.tag !== 'component' || attribute.src === undefined || attribute.fileName === undefined) {
        return `readonly ${attribute.name}: ${getTagType(tag)};`;
      }

      // 去除扩展名
      const fileBaseName = basename(attribute.fileName, '.xml');
      if(legally_name_reg.test(fileBaseName)) {

      }
      else {
        const idName = idToName(attribute.src);

      }

      const withoutExtension = attribute.fileName.replace(file_extension, '');

      const componentExportName = basename(attribute.fileName, '.xml');

    })

  const controllers = [] as string[];
  const transitions = [] as string[];

  config.elements?.forEach(cfg => {
    switch(cfg.name) {
      case 'controller':
        const ctrlAttribute = getAttribute(cfg);
        ctrlAttribute && controllers.push(ctrlAttribute.name);
        break;
      case 'transition':
        const transAttribute = getAttribute(cfg);
        transAttribute && transitions.push(transAttribute.name);
        break;
      case 'displayList':
        cfg.elements?.forEach(e => {
          const child = getAttribute(e);
          if(child === undefined) {
            return;
          }





        })
        break;
    }
  });
}


function getChildSnippet(config: Config): CodeSnippet {
  const child = getAttribute(config);


}


/**
 * @description 获取属性
 * @param {Config} config
 * @return {*}  {(ComponentAttribute | undefined)}
 */
function getAttribute(config: Config): ComponentAttribute | undefined {
  const attribute = config.attributes as ComponentAttribute | undefined;
  if(!attribute) {
    return undefined;
  }

  // 剔除名称不合法的属性
  const name = attribute.name;
  if(legally_name_reg.test(name) === false || sys_name_reg.test(name) === true) {
    return undefined;
  }

  // 设置属性标签
  attribute.tag = config.name;
  return attribute;
}

