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
  // 组件 tag name
  readonly tag: string;
  // 组件是否导出
  readonly exported?: 'true';
};