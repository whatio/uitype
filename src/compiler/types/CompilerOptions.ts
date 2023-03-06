/**
 * @description 编译选项
 */
export interface CompilerOptions {
  // 发布名称
  publishName: string;
  // 资源根目录
  rootDir: string;
  // 输出文件，不设置则只编译不输出
  outFile?: string;
  // 仅编译指定包
  include?: string[];
  // 剔除指定包
  exclude?: string[];
}