import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { emit } from "../emit";
import { toCode, StrictComponentSnippet } from "../snippet";
import type { CodeSnippet, CompilerOptions } from "../types";
import { compilePackage } from "./compile-package";

/**
 * @description 编译项目
 * @param {string} assetsPath 资源根目录
 * @param {CompilerOptions} options 编译选项
 * @return {*}  {CodeSnippet}
 */
export function compileProject(assetsPath: string, options: CompilerOptions): CodeSnippet {
  if (existsSync(assetsPath) === false) {
    console.log(`项目资源根目录不存在! [assetsPath=${assetsPath}]`);
    return '';
  }

  const { publishName, outFile, include, exclude } = options;

  // 项目代码片段
  const projectSnippet: CodeSnippet = [];
  projectSnippet.push(`import * as fairygui from 'fairygui-cc';`);
  projectSnippet.push(...HeaderCommentSnippet);
  projectSnippet.push(`declare namespace ${publishName} {`);
  
  // 严格组件类型代码片段
  projectSnippet.push(StrictComponentSnippet);

  // 编译代码
  readdirSync(assetsPath).forEach(packageName => {
    if(exclude?.length && exclude.includes(packageName)) {
      return;
    }
    if(include?.length && include.includes(packageName) === false) {
      return;
    }
    const packagePath = join(assetsPath, packageName);
    const packageSnippet = compilePackage(packagePath);
    if(packageSnippet !== undefined) {
      projectSnippet.push(packageSnippet);
    }
  });

  projectSnippet.push('}');
  
  // 输出
  if(outFile !== undefined) {
    console.log('正在输出...: ' + outFile);
    const code = toCode(projectSnippet);
    emit(code, outFile);
  }
  
  console.log('项目编译完成！');
  return projectSnippet;
}

// 头部注释代码块
const HeaderCommentSnippet: CodeSnippet = [
  '// 没有设置导出且没有被其他组件引用的组件将不会被导出类型!',
  '// 不符合命名规则的包,导出名将使用`__pkg__${包id}`来代替!',
  '// 不符合命名规则的组件,导出名将使用`__cmpt__${组件id}`来代替!',
  '// 不符合变量命名规则的属性(不符合正则:`/^[\$\_a-zA-Z]+[\$\_\d\w]*$/`)不会被导出!',
  '// 非自定义名称的属性(系统自动生成名字的属性, 符合正则：`/^n[0-9]+$/`)不会被导出！',
];