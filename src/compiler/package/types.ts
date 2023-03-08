import type { ComponentProfile } from "../component";

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