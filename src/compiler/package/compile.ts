import { compileComponent, ComponentAttribute } from "../component";
import type { CodeSnippet } from "../snippet";
import type { Package } from "./types";

/**
 * @description 编译组件包
 * @param {Package} { id, name,  aliasName,  referenceMap, componentListMap } 组件包
 * @param {((attribute: ComponentAttribute) => string | undefined)} getReference 获取属性类型引用地址
 * @return {*}  {CodeSnippet}
 */
export function compilePackage(
  { id, name,  aliasName,  referenceMap, componentListMap } : Package,
  getReference: (attribute: ComponentAttribute) => string | undefined
): CodeSnippet {

  // 组件包内不包含可以导出的组件 
  if(componentListMap.size === 0) {
    return '';
  }

  // 获取组件类型引用地址
  const _getReference: typeof getReference = (attribute) => {
    const { pkg, src } = attribute;
    if(!src) {
      return undefined;
    }
    if(!pkg || pkg === id) {
      return referenceMap.get(src);
    }
    return getReference(attribute);
  };

  // 编译组件包
  const packageSnippets: CodeSnippet = [
    `import ${aliasName} = ${name};`,
    `namespace ${name} {`
  ];

  // 先排序再编译
  const sortedEntries = [...componentListMap.entries()]
    .sort(([a], [b]) => a.length > b.length ? 1 : -1);
  sortedEntries.forEach(([internalPkg, list]) => {
    const listSnippets = list.map(cmpt => compileComponent(cmpt, _getReference)).flat();
    if(internalPkg.length === 0) {
      packageSnippets.push(listSnippets);
      return;
    }
    packageSnippets.push([
      `namespace ${internalPkg} {`,
      listSnippets,
      '}'
    ]);
  });

  packageSnippets.push('}')
  return packageSnippets;
}