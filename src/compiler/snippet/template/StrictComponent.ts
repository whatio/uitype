import type { CodeSnippet } from "../../types";

// 严格约束`getController`参数类型
type StrictGetController<T, U extends string | undefined> = T extends { getController(name: string): infer R }
  ? { getController(name: U extends undefined ? never : U): R } & Omit<T, "getController">
  : T;
  
// 严格约束`getTransition`参数类型
type StrictGetTransition<T, U extends string | undefined> = T extends { getTransition(name: string): infer R }
  ? { getTransition(name: U extends undefined ? never : U): R } & Omit<T, "getTransition">
  : T;

// 严格约束`getChild`参数类型和返回类型
type StrictGetChild<T, U extends { [x: string]: unknown } | undefined> = T extends { getChild(name: string): unknown }
  ? {
      // 不存在此属性，请勿调用，仅用于存储类型
      readonly __DisplayListType__?: U;
      getChild<P extends keyof U>(name: P): U[P];
    } & Omit<T, "getChild">
  : T;

// 严格模式的组件
export type StrictComponent<
  Component,
  DisplayList extends { [x: string]: unknown } | undefined = undefined,
  Controller extends string | undefined = undefined,
  Transition extends string | undefined = undefined
> = StrictGetChild<StrictGetController<StrictGetTransition<Component, Transition>, Controller>, DisplayList>;

// 严格模式组件名字
export const StrictComponentName = 'StrictComponent';

// 严格模式组件类型代码片段
export const StrictComponentSnippet: CodeSnippet = [
  '// ==================================== strict ======================================',
  '// 严格约束`getController`参数类型',
  'type StrictGetController<T, U extends string | undefined> = T extends { getController(name: string): infer R }',
  '  ? { getController(name: U extends undefined ? never : U): R } & Omit<T, "getController">',
  '  : T;',
  
  '// 严格约束`getTransition`参数类型',
  'type StrictGetTransition<T, U extends string | undefined> = T extends { getTransition(name: string): infer R }',
  '  ? { getTransition(name: U extends undefined ? never : U): R } & Omit<T, "getTransition">',
  '  : T;',

  '// 严格约束`getChild`参数类型和返回类型',
  'type StrictGetChild<T, U extends { [x: string]: unknown } | undefined> = T extends { getChild(name: string): unknown }',
  '  ? {',
  '      // 不存在此属性，请勿调用，仅用于存储类型',
  '      readonly __DisplayListType__?: U;',
  '      getChild<P extends keyof U>(name: P): U[P];',
  '    } & Omit<T, "getChild">',
  '  : T;',

  '// 严格模式的组件',
  'type StrictComponent<',
  '  Component,',
  '  DisplayList extends { [x: string]: unknown } | undefined = undefined,',
  '  Controller extends string | undefined = undefined,',
  '  Transition extends string | undefined = undefined',
  '> = StrictGetChild<StrictGetController<StrictGetTransition<Component, Transition>, Controller>, DisplayList>;',
  '// ==================================== strict ======================================'
];