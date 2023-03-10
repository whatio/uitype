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

## 生产环境

### 安装

```bash
# 全局安装
npm install uitype -g

# 本地安装，可以用 npx uitype 调用
npm install uitype --save
```

### 常用指令

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

## 代码实例

### 在项目中使用（以`fairygui`为例）

```ts
// 通过命令生成的 `uit.types.d.ts`文件（局部代码）
declare namespace uit {
  namespace test {
    namespace components {
      type TestView = StrictComponent<
        fairygui.GComponent,
        {
          readonly btn: fairygui.GButton;
          readonly cmpt: components.TestComponent;
        },
        "c1" | "c2",
        "t1" | "t2"
      >;
      type TestComponent = StrictComponent<
        fairygui.GComponent,
        {
          readonly title: fairygui.GTextField;
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
const view = fairygui.UIPackage.createObject("test", "TestView") as uit.test.components.TestView;
// 当调用`getChild`时，参数会自动提示 'btn' | 'cmpt'，且返回值类型非常明确
const child = view.getChild("cmpt");
// 因为`child`类型非常明确为`components.TestComponent`，因此后续继续有代码提示
const next = child.getChild("title");
// 当调用`getController`时，参数会自动提示 'c1' | 'c2'
const ctrl = view.getController("c1");
// 当调用`getController`时，参数会自动提示 't1' | 't2'
const trans = view.getTransition("t1");

// 也可以使用`Proxy`代理属性的获取，这个很简单，有手就行
```

## 未完待续

1. 新增 dts 压缩选项设置
