import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { loadPackage, type Package } from "../package";

/**
 * @description 加载包映射
 * - { 包ID: Package}
 * @param {string} assetsPath 包资源根路径
 * @param {string[]} [include] 如果设置此参数，则仅加载被指定的包
 * @param {string[]} [exclude] 如果设置此参数，则不加载被指定的包
 * @return {*}  {(Map<string, Package> | undefined)}
 */
export function loadProject(assetsPath: string, include?: string[], exclude?: string[]): Map<string, Package> | undefined {
  // 检查资源目录
  if(existsSync(assetsPath) === false) {
    console.log('找不到项目资源目录！ assetsPath: ' + assetsPath);
    return undefined;
  }

  // 加载映射列表
  const packageMap = new Map<string, Package>();
  readdirSync(assetsPath).forEach(name => {
    if(exclude?.length && exclude.includes(name)) {
      return;
    }
    if(include?.length && include.includes(name) === false) {
      return;
    }
    const packagePath = join(assetsPath, name);
    const pkg = loadPackage(packagePath);
    if(pkg !== undefined) {
      packageMap.set(pkg.id, pkg);
    }
  });
  return packageMap;
}