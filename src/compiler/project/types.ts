/**
 * @description 编译选项
 */
export interface CompilerOptions {
  // 发布名称
  readonly publishName?: string;
  // 项目资源根目录名 默认是`assets`
  readonly assetsName?: string;
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
  compilerOptions: CompilerOptions;
  // 类型映射
  tagMapping: Record<string, string | undefined>;
}

// 新增下划线前缀
export type UnderlinePrefix<T extends string> = `_${T}`;
// 移除下划线前缀
export type CutUnderline<T> = T extends UnderlinePrefix<infer R> ? R : never;
