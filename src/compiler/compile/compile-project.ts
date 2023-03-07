import { existsSync, readdirSync, readFileSync } from "fs";
import { join } from "path";
import { emit } from "../emit";
import { toCode } from "../snippet";
import { StrictComponentSnippet } from "../template";
import type { CodeSnippet, CompilerOptions } from "../types";
import { typeConfig } from "../utils";
import { compilePackage } from "./compile-package";

/**
 * @description 编译项目
 * @param {string} projectPath 项目根目录
 * @param {CompilerOptions} [options] 编译选项
 * @return {*}  {CodeSnippet}
 */
export function compileProject(projectPath: string, options?: CompilerOptions): CodeSnippet {
  // 读取项目配置
  const configFile = join(projectPath, 'config.uitype.json');
  if (existsSync(configFile) === true) {
    const configContent = readFileSync(configFile).toString('utf-8');
    const config = JSON.parse(configContent) as CompilerOptions;

    if(config.tagMapping) {
      typeConfig.typeMapping = {
        ...typeConfig.typeMapping,
        ...config.tagMapping
      };
    }

    if(options === undefined) {
      options = config;
    }
    else {
      options = {
        ...config,
        ...options
      };
    }
  }

  if(options === undefined) {
    console.log(`请设置编译选项!`);
    return '';
  }

  const assetsPath = join(projectPath, options.assetsName ?? 'assets');
  if (existsSync(assetsPath) === false) {
    console.log(`项目资源根目录不存在! [assetsPath=${assetsPath}]`);
    return '';
  }

  const { publishName, outFile, include, exclude } = options;

  // 项目代码片段
  const projectSnippet: CodeSnippet = [];
  projectSnippet.push(`import * as fairygui from 'fairygui-cc';`);
  projectSnippet.push('// 没有设置导出且没有被其他组件引用的组件将不会被导出类型!');
  projectSnippet.push('// 不符合命名规则的组件,导出名将使用`__ID__${组件id}`来代替!');
  projectSnippet.push('// 不符合变量命名规则的属性(不符合正则:`/^[\$\_a-zA-Z]+[\$\_\d\w]*$/`)不会被导出!');
  projectSnippet.push('// 非自定义名称的属性(系统自动生成名字的属性, 符合正则：`/^n[0-9]+$/`)不会被导出！');
  projectSnippet.push(`declare namespace ${publishName} {`);

  
  // 严格组件类型代码片段
  projectSnippet.push(['// ==================================== strict ======================================'])
  projectSnippet.push(StrictComponentSnippet);
  projectSnippet.push(['// ==================================== strict ======================================'])

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
    const code = toCode(projectSnippet);
    emit(code, outFile);
    console.log('正在输出...: ' + outFile);
  }
  
  console.log('项目编译完成！');
  return projectSnippet;
}