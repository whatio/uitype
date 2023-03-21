import { tagTypeOf } from "../project";
import { type CodeSnippet, StrictComponentName } from "../snippet";
import type { Component, ComponentAttribute } from "./types";

/**
 * @description 编译组件
 * @param {Component} component 组件
 * @param {((attribute: ComponentAttribute) => string | undefined)} getReference 获取属性类型引用地址
 * @return {*}  {CodeSnippet}
 */
export function compileComponent(
  component: Component,
  getReference: (attribute: ComponentAttribute) => string | undefined,
): CodeSnippet {

  const { extention, attributes, publishName } = component;
  const controllers: string[] = [];
  const transitions: string[] = [];
  const displayList: CodeSnippet[] = [];

  // 编译属性列表
  attributes.forEach(attribute => {
    switch(attribute.tag) {
      case 'controller':
        controllers.push(`'${attribute.name}'`);
        break;
      case 'transition':
        transitions.push(`'${attribute.name}'`);
        break;
      default:
        // 设置类型为内置组件的属性
        if(attribute.tag !== 'component' || attribute.src === undefined) {
          // 输入文本类型特殊处理
          if(attribute.tag === 'text') {
            const textAttr = attribute as ComponentAttribute & {input?: 'true'};
            if(textAttr.input === 'true') {
              attribute.tag = 'textinput';
            }
          }
          const type = tagTypeOf(attribute.tag);
          displayList.push(`readonly ${attribute.name}: ${type};`);
          return;
        }
        
        // 设置自定义组件属性
        const ref = getReference(attribute);
        if (ref === undefined) {
          return;
        }
        displayList.push(`readonly ${attribute.name}: ${ref};`);
        break;
    }
  });


  const CtrlType = controllers.length > 0 ? controllers.join(" | ") : "never";
  const TransType = transitions.length > 0 ? transitions.join(" | ") : "never";

  // 导出空显示列表组件
  if (displayList.length === 0) {
    return [`type ${publishName} = ${StrictComponentName}<${extention}, undefined, ${CtrlType}, ${TransType}>;`];
  }

  // 导出完整组件类型
  const componentSnippet: CodeSnippet = [];
  componentSnippet.push(`type ${publishName} = ${StrictComponentName}<${extention}, {`);
  componentSnippet.push(displayList);
  componentSnippet.push(`}, ${CtrlType}, ${TransType}>;`);
  return componentSnippet;
}
