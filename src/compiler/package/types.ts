import type { Component } from "../component";

/**
 * @description 组件包
 */
export interface Package {
  // 包id
  readonly id: string;
  // 包发布名
  readonly name: string;
  // 包发布别名
  readonly aliasName: string;
  // 组件引用类型地址映射列表 - {组件ID: 组件引用类型地址}
  readonly referenceMap: Map<string, string>;
  // 待导出的自定义组件列表映射 - { 包内引用地址: Component[] }
  readonly componentListMap: Map<string, Component[]>;
}