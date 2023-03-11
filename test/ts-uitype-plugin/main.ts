import { FairyEditor } from 'csharp';

const App = FairyEditor.App;
const toolMenu = App.menu.GetSubMenu('tool');
const itemName = 'ts-uitype-plugin';

toolMenu.AddItem('发布uitype', itemName, () => {
  const exePath = App.project.basePath + '\\plugins\\ts-uitype-plugin\\一键导出dts.bat';
  FairyEditor.ProcessUtil.Start(exePath, undefined, undefined, false); 
});

function onDestroy() {
  toolMenu.RemoveItem(itemName);
}
export { onDestroy }






