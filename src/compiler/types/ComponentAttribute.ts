/**
 * @description 组件属性
 */
export interface ComponentAttribute {
  // 标签
  tag: string;
  // 属性名称
  readonly name: string;
  // 属性引用的组件在其所属包内的相对地址
  readonly fileName?: string;
  // 属性引用的组件id
  readonly src?: string;
  // 属性引用的组件所属包，当不存在时则表示引用的组件为同包内组件
  readonly pkg?: string;
};