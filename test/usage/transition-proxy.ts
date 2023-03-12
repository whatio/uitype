// TransitionProxy
export type TransitionProxy<Component> = Component extends { getTransition(name: infer Name): infer R }
  ? NonNullable<Name> extends never
    ? never
    : { [P in Name extends string ? Name : never]: R }
  : never;


/**
 * @description 生成 TransitionProxy
 * @param {T} component 组件
 * @return {*}  {TransitionProxy<T>}
 */
export function transitionProxyOf<T extends { getTransition(name: unknown): unknown}>(component: T): TransitionProxy<T> {
  const pxy = new Proxy({} as TransitionProxy<T>, {
    get(target, p) {
      const name = p as keyof TransitionProxy<T>;
      if(name in target) {
        return target[name];
      }
      const value = component.getTransition(name);
      target[name] = value as TransitionProxy<T>[typeof name];
      return value;
    },
  });
  return pxy;
}