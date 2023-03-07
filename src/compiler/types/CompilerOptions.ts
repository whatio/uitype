/**
 * @description 编译选项
 */
export interface CompilerOptions {
  // 发布名称
  publishName: string;
  // 项目根目录
  rootDir?: string;
  // 资源相对目录 默认为 'assets'
  assetsName?: string;
  // 输出文件，不设置则只编译不输出
  outFile?: string;
  // 仅编译指定包
  include?: string[];
  // 剔除指定包
  exclude?: string[];
  // 类型映射
  tagMapping?: Record<string, string | undefined>;
}