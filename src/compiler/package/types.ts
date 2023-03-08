// ComponentProfile
export type ComponentProfile = {
  // 组件标签名
  tagName: string;
  // 组件包内引用路径
  internalPackage: string;
  // 组件发布名
  publishName: string;

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
 * @description Package
 */
export interface Package {
  // 包id
  readonly id: string;
  // 包发布名
  readonly name: string;
  // 包发布别名
  readonly aliasName: string;
  // 包路径地址
  readonly packagePath: string;
  // 组件映射列表 {组件id: ComponentProfile}
  readonly componentMap: Map<string, ComponentProfile>;
}