import type { CodeSnippet } from "../snippet-to-code";

// 严格约束`getController`参数类型
type StrictGetController<T, U extends string> = T extends { getController(name: string): infer R; }
  ? { getController(name: U, strict: true): R }
  : unknown;
  
// 严格约束`getTransition`参数类型
type StrictGetTransition<T, U extends string> = T extends { getTransition(name: string): infer R; }
  ? { getTransition(name: U, strict: true): R }
  : unknown;

// 严格约束`getChild`参数类型和返回类型
type StrictGetChild<T, U extends { [x: string]: unknown } | undefined> = T extends { getChild(name: string): unknown }
  ? {
      // 不存在此属性，请勿调用，仅用于存储类型
      readonly __DisplayListType__?: U;
      getChild<P extends keyof U>(name: P, strict: true): U[P];
    }
  : unknown;

// 严格模式的组件（缺点是会破坏原类型）
export type StrictComponent<
  Component,
  DisplayList extends { [x: string]: unknown } | undefined = undefined,
  Controller extends string = never,
  Transition extends string = never
> = Component &
  StrictGetChild<Component, DisplayList> &
  StrictGetController<Component, Controller> &
  StrictGetTransition<Component, Transition>;

// 严格模式组件名字
export const StrictComponentName = 'StrictComponent';

// 严格模式组件类型代码片段
export const StrictComponentSnippet: CodeSnippet = [
  '// ==================================== strict ======================================',
  '// 严格约束`getController`参数类型',
  'type StrictGetController<T, U extends string> = T extends { getController(name: string): infer R; }',
  '  ? { getController(name: U, strict: true): R }',
  '  : unknown;',
  '// 严格约束`getTransition`参数类型',
  'type StrictGetTransition<T, U extends string> = T extends { getTransition(name: string): infer R; }',
  '  ? { getTransition(name: U, strict: true): R }',
  '  : unknown;',
  '// 严格约束`getChild`参数类型和返回类型',
  'type StrictGetChild<T, U extends { [x: string]: unknown } | undefined> = T extends { getChild(name: string): unknown }',
  '  ? {',
  '      // 不存在此属性，请勿调用，仅用于存储类型',
  '      readonly __DisplayListType__?: U;',
  '      getChild<P extends keyof U>(name: P, strict: true): U[P];',
  '    }',
  '  : unknown;',
  '// 严格模式的组件（缺点是会破坏原类型）',
  'export type StrictComponent<',
  '  Component,',
  '  DisplayList extends { [x: string]: unknown } | undefined = undefined,',
  '  Controller extends string = never,',
  '  Transition extends string = never',
  '> = Component &',
  '  StrictGetChild<Component, DisplayList> &',
  '  StrictGetController<Component, Controller> &',
  '  StrictGetTransition<Component, Transition>;  ',
  '// ==================================== strict ======================================'
];