import { uit } from '../ui-project/output-dts/uitype';
import * as fairygui from 'fairygui-cc';

// ControllerProxy
export type ControllerProxy<Component> = Component extends { getController(name: infer Name): infer R }
  ? NonNullable<Name> extends never
    ? never
    : { [P in Name extends string ? Name : never]: R }
  : never;


/**
 * @description 生成 ControllerProxy
 * @param {T} component 组件
 * @return {*}  {ControllerProxy<T>}
 */
export function controllerProxyOf<T extends { getController(name: unknown): unknown}>(component: T): ControllerProxy<T> {
  const pxy = new Proxy({} as ControllerProxy<T>, {
    get(target, p) {
      const name = p as keyof ControllerProxy<T>;
      if(name in target) {
        return target[name];
      }
      const value = component.getController(name);
      target[name] = value as ControllerProxy<T>[typeof name];
      return value;
    },
  });
  return pxy;
}


const pxy = controllerProxyOf({} as uit.MainUI.Views.BottomView);
pxy.conScene
const pxy2 = controllerProxyOf({} as uit.Academy.WendaoTipsWindow);
pxy2



type A<T> = T extends uit.StrictComponent<fairygui.GComponent, { [x: string]: unknown }, undefined, undefined> ? {
  a: number;
} : {
  b: number;
}

type A1 = A<uit.MainUI.Views.BottomView>;
type A2 = A<fairygui.GComponent>