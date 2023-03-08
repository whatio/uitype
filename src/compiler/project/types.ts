import type { CompilerOptions } from '../types/CompilerOptions';

/**
 * @description 项目配置
 */
export interface ProjectConfig {
  // 编译选项
  readonly compilerOptions: CompilerOptions;
  // 类型映射
  readonly tagMapping?: Record<string, string | undefined>;
}

/**
 * @description Project
 */
export interface Project {
  // 配置
  readonly config: ProjectConfig;
}