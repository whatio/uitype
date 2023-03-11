"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDestroy = void 0;
const csharp_1 = require("csharp");
const App = csharp_1.FairyEditor.App;
const toolMenu = App.menu.GetSubMenu('tool');
const itemName = 'ts-uitype-plugin';
toolMenu.AddItem('发布uitype', itemName, () => {
    const exePath = App.project.basePath + '\\plugins\\ts-uitype-plugin\\一键导出dts.bat';
    csharp_1.FairyEditor.ProcessUtil.Start(exePath, undefined, undefined, false);
});
function onDestroy() {
    toolMenu.RemoveItem(itemName);
}
exports.onDestroy = onDestroy;
