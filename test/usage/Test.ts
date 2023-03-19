import { ControllerProxy, decoratorOf } from "./controller-proxy";

export function doTest():void {
  const winst = new MyWindow();
  winst.test();
  winst.view = new View();
  winst.test();
}

class MyWindow {
  view!:View;
  @decoratorOf
  get pxy(): ControllerProxy<View> { return undefined as any};
  test():void {
    console.log(this.pxy.a);
    console.log(this.pxy.b);
  }
}

class View {
  getController(name: 'a' | 'b'): string {
    return name;
  }
}