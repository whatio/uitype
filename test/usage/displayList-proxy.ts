// DisplayListProxy
export type DisplayListProxy<T> = T extends { __DisplayListType__?: infer R }
  ? { [P in keyof R]: R[P]; }
  : unknown;

/**
 * @description 生成 DisplayListProxy
 * @param {T} component 组件
 * @return {*}  {DisplayListProxy<T>}
 */
export function displayListProxyOf<T extends {
  __DisplayListType__?: unknown;
  getChild(name: unknown): unknown;
}>(component: T): DisplayListProxy<T> {
  const pxy = new Proxy({} as DisplayListProxy<T>, {
    get(target, p) {
      const name = p as keyof DisplayListProxy<T>;
      if (name in target) {
        return target[name];
      }
      const value = component.getChild(name);
      target[name] = value as DisplayListProxy<T>[typeof name];
      return value;
    },
  });
  return pxy;
}
