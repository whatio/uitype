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