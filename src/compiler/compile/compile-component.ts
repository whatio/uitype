import type { CodeSnippet, ComponentAttribute } from "./types";
import { type Config, loadConfig } from "../loader";
import { basename } from "path";
import { StrictComponentName } from "../snippet";
import { 
  componentIdToName,
  pckageIdToName,
  legally_name_reg,
  sys_name_reg 
} from "../utils";
// import { DefaultConfig } from "../project";

/**
 * @description 编译组件
 * @param {string} configFile 组件配置文件地址
 * @param {string} publishName 发布名称
 * @return {*}  {(CodeSnippet | undefined)}
 */
export function compileComponent(configFile: string, publishName: string): CodeSnippet | undefined {
  const config = loadConfig(configFile)?.elements?.find(e => e.name === 'component');
  if(!config) {
    console.log('[加载组件配置失败!]');
    return undefined;
  }

  // 解析自定义组件扩展类型
  const tag = config.attributes?.extention ?? config.name;
  const extention = getTagType(tag);

  // 解析属性
  const controllers = [] as string[];
  const transitions = [] as string[];
  const displayList = [] as CodeSnippet[];
  config.elements?.forEach(cfg => {
    switch(cfg.name) {
      case 'controller':
        const ctrlAttribute = getAttribute(cfg);
        if(ctrlAttribute === undefined) {
          return;
        }
        controllers.push(`'${ctrlAttribute.name}'`);
        break;
      case 'transition':
        const transAttribute = getAttribute(cfg);
        if(transAttribute === undefined) {
          return;
        }
        transitions.push(`'${transAttribute.name}'`);
        break;
      case 'displayList':
        cfg.elements?.forEach(e => {
          const attribute = getAttribute(e);
          if(attribute === undefined) {
            return;
          }
          const { src, fileName } = attribute;

          // 处理内置类型属性
          if(attribute.tag !== 'component' || src === undefined || fileName === undefined) {
            const type = getTagType(attribute.tag);
            displayList.push(`readonly ${attribute.name}: ${type};`)
            return;
          }

          // 处理自定义组件类型属性
          const { pkg } = attribute;
          const fileBaseName = basename(fileName, '.xml');

          // 处理被引用的组件名
          const componentName = legally_name_reg.test(fileBaseName) ? fileBaseName : componentIdToName(src);
          // 处理被引用的组件包内引用路径
          const internalPackage = fileName
            .replace(/[^\\\/]+$/g, "")
            .replace(/^[\\\/]+|[\\\/]+$/g, "")
            .replace(/[\\\/]+/g, ".");

          // 处理完整引用路径
          let reference = pkg?.length ? `${pckageIdToName(pkg)}.` : '';
          reference =
            internalPackage.length > 0
              ? `${reference}${internalPackage}.${componentName}`
              : `${reference}${componentName}`;
          // 设置自定义组件属性
          displayList.push(`readonly ${attribute.name}: ${reference};`);
        })
        break;
    }
  });

  const controllerType = controllers.length > 0 ? controllers.join(' | ') : 'undefined';
  const transitionType = transitions.length > 0 ? transitions.join(' | ') : 'undefined';

  if(displayList.length === 0) {
    // 处理显示列表为空的情况
    return `type ${publishName} = ${StrictComponentName}<${extention}, undefined, ${controllerType}, ${transitionType}>;`;
  }

  const componentSnippet: CodeSnippet = [];
  componentSnippet.push(`type ${publishName} = ${StrictComponentName}<${extention}, {`);
  componentSnippet.push(displayList);
  componentSnippet.push(`}, ${controllerType}, ${transitionType}>;`);
  return componentSnippet;
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

// tag -> type
function getTagType(tag: string): string {
  // const type = DefaultConfig.tagMapping[tag as keyof typeof DefaultConfig.tagMapping] ?? tag;
  // return type;
  return tag;
}