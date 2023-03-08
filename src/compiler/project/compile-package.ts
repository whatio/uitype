import { compileComponent } from "./compile-component";
import type { CodeSnippet } from "../snippet";
import type { Package, ComponentAttribute } from "./types";




export function compilePackage(
  { id, referenceMap, components } : Package,
  getReference: (attribute: ComponentAttribute) => string | undefined
): CodeSnippet {

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



  
  
  // 分类
  components.map(componnet => compileComponent(componnet, _getReference))

  return ''

}