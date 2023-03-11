import * as fairygui from 'fairygui-cc';
// 没有设置导出且没有被其他组件引用的组件将不会被导出类型!
// 不符合命名规则的包,导出名将使用`__pkg__${包id}`来代替!
// 不符合命名规则的组件,导出名将使用`__cmpt__${组件id}`来代替!
// 不符合变量命名规则的属性(不符合正则:`/^[$_a-zA-Z]+[$_dw]*$/`)不会被导出!
// 非自定义名称的属性(系统自动生成名字的属性, 符合正则：`/^n[0-9]+$/`)不会被导出！
declare namespace uit {
	// ==================================== strict ======================================
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
	type StrictComponent<
	  Component,
	  DisplayList extends { [x: string]: unknown } | undefined = undefined,
	  Controller extends string | undefined = undefined,
	  Transition extends string | undefined = undefined
	> = StrictGetChild<StrictGetController<StrictGetTransition<Component, Transition>, Controller>, DisplayList>;
	// ==================================== strict ======================================
	import __pkg__mtvco5r4 = Test;
	namespace Test {
		type TestWindow = StrictComponent<fairygui.GComponent, {
			readonly uilibWindow: UILib.UILibWindow;
			readonly testComponent: Test.Components.TestComponent;
			readonly myShape: fairygui.GGraph;
		}, undefined, undefined>;
		namespace Components {
			type TestComponent = StrictComponent<fairygui.GComponent, {
				readonly testComponent: UILib.Components.UILibComponent;
				readonly title: fairygui.GTextField;
			}, undefined, undefined>;
		}
	}
	import __pkg__v8r15bds = UILib;
	namespace UILib {
		type UILibWindow = StrictComponent<fairygui.GComponent, {
			readonly testComponent: UILib.Components.UILibComponent;
			readonly title: fairygui.GTextField;
		}, undefined, undefined>;
		namespace Components {
			type UILibComponent = StrictComponent<fairygui.GComponent, {
				readonly btnAdd: UILib.Components.btn.BtnAdd;
				readonly txtName: fairygui.GTextField;
			}, 'ctrl' | 'ctrl2', undefined>;
		}
		namespace Components.btn {
			type BtnAdd = StrictComponent<fairygui.GButton, {
				readonly icon: fairygui.GLoader;
			}, 'button' | 'conIsGray', undefined>;
		}
	}
}
