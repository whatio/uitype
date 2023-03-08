import type { CodeSnippet } from "../types";

/**
 * @description 代码片段转成代码
 * - 自动格式化 - 自动缩进和换行
 * @param {CodeSnippet} snippet 代码片段
 * @param {string} [indent=''] 缩进, `\t\t\t\t`
 * @return {*}  {string}
 */
export function toCode(snippet: CodeSnippet, indent = ''): string {
  if(typeof snippet === 'string') {
    const lineCode = `${indent}${snippet}`;
    return lineCode;
  }

  const code = snippet.map(line => {
    if(typeof line === 'string') {
      const lineCode = `${indent}${line}\n`;
      return lineCode;
    }
    // 嵌套代码片段数组
    const nestCode = toCode(line, `${indent}\t`);
    return nestCode;
  }).join('');
  return code;
}