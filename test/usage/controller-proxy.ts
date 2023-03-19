// ControllerProxy
export type ControllerProxy<Component> = Component extends { getController(name: infer Name, strict: true): infer R }
  ? NonNullable<Name> extends never
    ? never
    : { [P in Name extends string ? Name : never]: R }
  : never;

/**
 * @description 生成 ControllerProxy
 * @param {T} component 组件
 * @return {*}  {ControllerProxy<T>}
 */
export function controllerProxyOf<T extends { getController(name: unknown): unknown; }>(component: T): ControllerProxy<T> {
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


export const decoratorOf: MethodDecorator = (_, __, descriptor) => {
  let proxy: ControllerProxy<unknown> | undefined = undefined;
  descriptor.get = function () {
    if(proxy !== undefined) {
      return proxy;
    }
    const that = this as {
      view?: { getController(name: unknown): unknown }
    };
    proxy = new Proxy({} as any, {
      get(target, name: string) {
        let result = target[name];
        if(result !== undefined) {
          return result;
        }

        result = that.view?.getController(name);
        target[name] = result;
        return result;
      }
    });
    return proxy!;
  };
};