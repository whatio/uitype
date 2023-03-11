// 剔除`never`属性
type NonNeverable<T> = Pick<T, {[P in keyof T]: T[P] extends never ? never : P; }[keyof T]>;

// ControllerProxy
export type ControllerProxy<Component> = Component extends { getController(name: infer Name): infer R }
  ? NonNullable<Name> extends never
    ? never
    : { [P in Name extends string ? Name : never]: R }
  : never;

// TransitionProxy
export type TransitionProxy<Component> = Component extends { getTransition(name: infer Name): infer R }
  ? NonNullable<Name> extends never
    ? never
    : { [P in Name extends string ? Name : never]: R }
  : never;

// DisplayListProxy
export type DisplayListProxy<T> = T extends {__DisplayListType__?: infer R } 
  ? { [P in keyof R]: R[P]; }
  : unknown;

// ComponentProxy
export type ComponentProxy<Component> = NonNeverable<{
  // controller
  controller: ControllerProxy<Component>;
  // transition
  transition: TransitionProxy<Component>;
  // displayList
  displayList: DisplayListProxy<Component>;
}>;