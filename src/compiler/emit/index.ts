import { mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";

/**
 * @description 输出文件
 * @param {string} content 文件内容
 * @param {string} path 文件地址
 */
export function emit(content: string, path: string): void {
  const dir = dirname(path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path, content);
}