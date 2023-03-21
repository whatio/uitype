import { UIPackage } from "fairygui-cc";
import { controllerProxyOf } from "./controller-proxy";
import { displayListProxyOf } from "./displayList-proxy";
import { transitionProxyOf } from "./transition-proxy";


/**
 * @description 测试代理，可以配合装饰器更方便的操作
*/
export function testProxy(cmpt: uit.UILib.Components.UILibComponent): void {
  
  const ctrls = controllerProxyOf(cmpt);
  ctrls.ctrl.selectedIndex = 0;
  ctrls.ctrl2.selectedIndex = 1;
  
  const displayList = displayListProxyOf(cmpt);
  displayList.btnAdd.onClick(() => {});
  displayList.txtName.text = 'hello uit';
  
  // never
  const trans = transitionProxyOf(cmpt);
  trans;
}

// 以下代码 仅用于查看，请勿运行（实际并没有加载资源，创建的组件为空）
const cmpt = UIPackage.createObject('UILib', 'UILibComponent') as uit.UILib.Components.UILibComponent;
testProxy(cmpt);