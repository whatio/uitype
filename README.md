# 自动生成组件类型

## 概述

### 解决那些问题

1. 解决获取子对象时没有代码提示（提示子对象的具体属性名字）
2. 解决获取子对象的类型不明确的问题
3. 解决通过编辑器修改组件并发布后，项目代码不自动提示错误
4. 把运行时阶段的空指针报错提前到编译阶段，这样能防止更多的逻辑错误

### 支持

本工具暂时只支持 fariygui 的组件类型生成

### Usage

- [生产环境](#生产环境)
- [开发环境](#开发者模式)
- [代码实例](#代码实例)

## 生产环境

### 安装

```bash
# 全局安装
npm install uitype -g

# 本地安装，可以用 npx uitype 调用
npm install uitype --save
```

### 通过 cli 指令调用

```bash
# 输出基本信息
uitype

# 编译
uitype compile -h

# 根据根目录编译
uitype compile --root 项目目录 --outFile 类型文件输出地址

# 编译 指定的包
uitype compile --root 项目目录 --outFile 类型文件输出地址 --include A B C
```

### 通过代码调用

```ts
// 引入包
import { compileProject } from "uitype/dist/compiler";
// 编译项目
compileProject("test/ui-project", {
  outFile: "test/ui-project-dist/uitype.d.ts",
});
```

## 代码实例

### 在项目中使用（以`fairygui`为例）

```ts
// 通过命令生成的 `uit.types.d.ts`文件（局部代码）
declare namespace uit {
  namespace test {
    namespace components {
      type TestView = StrictComponent<
        import("fairygui-cc").GComponent,
        {
          readonly btn: import("fairygui-cc").GButton;
          readonly cmpt: components.TestComponent;
        },
        "c1" | "c2",
        "t1" | "t2"
      >;
      type TestComponent = StrictComponent<
        import("fairygui-cc").GComponent,
        {
          readonly title: import("fairygui-cc").GTextField;
        },
        undefined,
        undefined
      >;
    }
  }
}
```

```ts
// 创建一个自定义的组件，并通过as来转换成生成的类型
import { UIPackage } from "fairygui-cc";
const view = UIPackage.createObject("test", "TestView") as uit.test.components.TestView;
// 当调用`getChild`时，参数会自动提示 'btn' | 'cmpt'，且返回值类型非常明确
const child = view.getChild("cmpt", true);
// 因为`child`类型非常明确为`components.TestComponent`，因此后续继续有代码提示
const next = child.getChild("title", true);
// 当调用`getController`时，参数会自动提示 'c1' | 'c2'
const ctrl = view.getController("c1", true);
// 当调用`getController`时，参数会自动提示 't1' | 't2'
const trans = view.getTransition("t1", true);

// 也可以使用`Proxy`代理属性的获取
// 比如`Controller`代理，其他的代理也类似，有手就行~
export type ControllerProxy<Component> = Component extends { getController(name: infer Name, strict: true): infer R }
  ? NonNullable<Name> extends never
    ? never
    : { [P in Name extends string ? Name : never]: R }
  : never;
export function controllerProxyOf<T extends { getController(name: unknown): unknown }>(
  component: T
): ControllerProxy<T> {
  const pxy = new Proxy({} as ControllerProxy<T>, {
    get(target, p) {
      const name = p as keyof ControllerProxy<T>;
      if (name in target) {
        return target[name];
      }
      const value = component.getController(name);
      target[name] = value as ControllerProxy<T>[typeof name];
      return value;
    },
  });
  return pxy;
}

// 直接有代码提示，不用给每个控制前设置引用
const ctrls = controllerProxyOf(view);
ctrls.c1.selectedIndex = 0;
ctrls.c2.selectedIndex = 1;

// 也可以配合装饰器自动创建`Proxy`，这个很简单，有手就行
```

## 开发环境

### 工程安装

```bash
# 安装依赖
npm install

# 安装本地cli测试环境
npm link

# 卸载本地cli测试环境
npm unlink uitype -g
```

### 脚本命令

```bash
# 构建
npm run build
```

### 开发调试

使用`vscode`可以直接`F5`调试

自动构建：

```bash
# 开发模式
npm run dev
```
