import { join } from "path";
import { DefaultConfig } from "../project";
import { StrictComponentName } from "../snippet";
import { legally_name_reg, sys_name_reg } from "../utils";
import { type Config, loadConfig } from "../loader";
import type { CodeSnippet, ComponentAttribute } from "../types";
import type { ComponentProfile } from "./types";

/**
 * @description 编译组件
 * @param {ComponentProfile} profile profile
 * @param {string} packagePath 组件所属包地址
 * @param {((cmptId: string, pkgId?: string) => string | undefined)} getReference 获取组件引用类型
 * @return {*}  {(CodeSnippet | undefined)}
 */
export function compileComponent(
  profile: ComponentProfile,
  packagePath: string,
  getReference: (cmptId: string, pkgId?: string) => string | undefined
): CodeSnippet | undefined {
  // 加载配置
  const file = join(packagePath, profile.path, profile.name);
  const config = loadConfig(file)?.elements?.find((e) => e.name === "component");
  if (!config) {
    console.log("[加载组件配置失败!]");
    return undefined;
  }

  // 解析自定义组件扩展类型
  const tag = config.attributes?.extention ?? config.name;
  const extention = getTagType(tag);

  // 编译属性
  const controllers = [] as string[];
  const transitions = [] as string[];
  const displayList = [] as CodeSnippet[];
  config.elements?.forEach((cfg) => {
    switch (cfg.name) {
      case "controller":
        const ctrlAttribute = getAttribute(cfg);
        if (ctrlAttribute === undefined) {
          return;
        }
        controllers.push(`'${ctrlAttribute.name}'`);
        break;
      case "transition":
        const transAttribute = getAttribute(cfg);
        if (transAttribute === undefined) {
          return;
        }
        transitions.push(`'${transAttribute.name}'`);
        break;
      case "displayList":
        cfg.elements?.forEach((e) => {
          const attribute = getAttribute(e);
          if (attribute === undefined) {
            return;
          }

          // 处理内置类型属性
          if (attribute.tag !== "component" || attribute.src === undefined) {
            const type = getTagType(attribute.tag);
            displayList.push(`readonly ${attribute.name}: ${type};`);
            return;
          }

          // 剔除找不到引用类型的属性
          const ref = getReference(attribute.src, attribute.pkg);
          if (ref === undefined) {
            return;
          }

          // 设置自定义组件属性
          displayList.push(`readonly ${attribute.name}: ${ref};`);
        });
        break;
    }
  });

  const controllerType = controllers.length > 0 ? controllers.join(" | ") : "undefined";
  const transitionType = transitions.length > 0 ? transitions.join(" | ") : "undefined";

  // 处理显示列表为空的情况
  if (displayList.length === 0) {
    return `type ${profile.publishName} = ${StrictComponentName}<${extention}, undefined, ${controllerType}, ${transitionType}>;`;
  }
  const componentSnippet: CodeSnippet = [];
  componentSnippet.push(`type ${profile.publishName} = ${StrictComponentName}<${extention}, {`);
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
  const type = DefaultConfig.tagMapping[tag as keyof typeof DefaultConfig.tagMapping] ?? tag;
  return type;
}