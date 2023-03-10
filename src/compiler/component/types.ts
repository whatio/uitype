/**
 * @description 组件profile
 */
export interface ComponentProfile {
  // 组件id
  readonly id: string;
  // 组件文件名（包含扩展名）
  readonly name: string;
  // 组件在其所属包内的相对路径
  readonly path: string;
  // 组件是否导出
  readonly exported?: 'true';
}

/**
 * @description 组件属性
 */
export interface ComponentAttribute {
  // 标签
  tag: string;
  // 属性名称
  readonly name: string;
  // 属性引用的组件id
  readonly src?: string;
  // 属性引用的组件所属包，当不存在时则表示引用的组件为同包内组件
  readonly pkg?: string;
};

/**
 * @description 组件
 */
export interface Component {
  // 组件id
  readonly id: string;
  // 发布名字
  readonly publishName: string;
  // 内置扩展类型
  readonly extention: string;
  // 组件内属性列表
  readonly attributes: ComponentAttribute[];
}