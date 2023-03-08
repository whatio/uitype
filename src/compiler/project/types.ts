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
};

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
  // 组件包内引用路径
  internalPackage?: string;
  // 发布名字
  publishName?: string;
  // 内置扩展类型
  readonly extention: string;
  // 组件内属性列表
  readonly attributes: ComponentAttribute[];
}

/**
 * @description 包
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
  // 待导出的自定义组件映射列表 {组件id: Component}
  readonly componentMap: Map<string, Component>;
  // 待导出的自定义组件列表
  readonly components: Component[];
}


// 新增下划线前缀
export type UnderlinePrefix<T extends string> = `_${T}`;
// 移除下划线前缀
export type CutUnderline<T> = T extends UnderlinePrefix<infer R> ? R : never;






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
 * @description 项目配置
 */
export interface ProjectConfig {
  // 编译选项
  readonly compilerOptions: CompilerOptions;
  // 类型映射
  readonly tagMapping?: Record<string, string | undefined>;
}