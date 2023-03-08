// 代码片段
export type CodeSnippet = string | CodeSnippet[];

/**
 * @description 编译选项
 */
export interface CompilerOptions {
  // 发布名称
  readonly publishName: string;
  // 输出文件，不设置则只编译不输出
  readonly outFile?: string;
  // 仅编译指定包
  readonly include?: string[];
  // 剔除指定包
  readonly exclude?: string[];
}

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

/**
 * @description 组件profile
 */
export interface ComponentProfile {
  // 组件 tag name
  tag: string;
  // 组件id
  readonly id: string;
  // 组件文件名（包含扩展名）
  readonly name: string;
  // 组件在其所属包内的相对路径
  readonly path: string;
  // 组件是否导出
  readonly exported?: 'true';
};