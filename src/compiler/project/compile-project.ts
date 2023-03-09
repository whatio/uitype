import { join } from "path";
import { emit } from "../emit";
import { CodeSnippet, StrictComponentSnippet, toCode } from "../snippet";
import { compilePackage } from "./compile-package";
import { loadPackageList } from "./load-package";
import { loadProjectConfig } from "./load-project-config";
import type { CompilerOptions, Package } from "./types";


export function compileProject(projectRoot: string, options?: CompilerOptions): CodeSnippet{
  // 加载项目配置
  const config = loadProjectConfig(projectRoot);
  if(config === undefined) {
    return '';
  }

  // 处理编译选项
  options = options ? {
    ...config.compilerOptions,
    ...options
  } : config.compilerOptions;

  // 加载组件包
  const { publishName, assetsName, outFile, include, exclude } = options;
  const assetsPath = join(projectRoot, assetsName ?? 'assets');
  const packages = loadPackageList(assetsPath, include, exclude);
  if(packages === undefined) {
    return '';
  }

  // 编译组件包
  const packageMap = new Map<string, Package>();
  packages.forEach(pkg => packageMap.set(pkg.id, pkg));
  const _getReference: Parameters<typeof compilePackage>[1] = (attribute) => {
    const { pkg, src } = attribute;
    if(pkg === undefined || src === undefined) {
      return undefined;
    }
    return packageMap.get(pkg)?.referenceMap.get(src);
  };
  const packageSnippets = packages.map(pkg => compilePackage(pkg, _getReference))


  // 项目代码片段
  const projectSnippet: CodeSnippet = [];
  projectSnippet.push(`import * as fairygui from 'fairygui-cc';`);
  projectSnippet.push(...HeaderCommentSnippet);
  projectSnippet.push(`declare namespace ${publishName} {`);
  
  // 严格组件类型代码片段
  projectSnippet.push(StrictComponentSnippet);
  // 组件包
  projectSnippet.push(packageSnippets);

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