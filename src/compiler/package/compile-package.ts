import { compileComponent } from "../component";
import type { Package } from "./types";








export function compilePackage(pkg: Package, packgeMap: Map<string, Package>) {

  const _getReference = (cmptId: string, pkgId?: string): string | undefined => {
    const _pkg = pkgId === undefined ? pkg : packgeMap.get(pkgId);
    if(_pkg === undefined) {
      return undefined;
    }
    const cmpt = _pkg.componentMap.get(cmptId);
    if(cmpt === undefined) {
      return undefined;
    }

    let _ref = cmpt.publishName;
    if(cmpt.internalPackage.length > 0) {
      _ref = `${cmpt.internalPackage}.${_ref}`;
    }

    if(pkgId !== undefined) { 
      _ref = `${_pkg.name}.${_ref}`;
    }
    return _ref;
  }
  pkg.componentMap.forEach(profile => {

    const internalPackage = profile.internalPackage;
    const code = compileComponent(profile, pkg.packagePath, _getReference);
  });

}