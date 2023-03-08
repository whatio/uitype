import { compileProject } from '../src/compiler';


function startup(): void {
  const timeLabel = '[uitypes-cli] success! 耗时';
  console.time(timeLabel);

  let assetsRoot = 'test/ui-project/assets';
  let outFile = 'test/ui-project-dist/uitype.d.ts';

  assetsRoot = 'F:/cocos/tool/FairyGUI-Project/assets';
  outFile = 'F:/cocos/client/cocos_slg/assets/lib/uitype/uitype.d.ts';

  compileProject(assetsRoot, { publishName: 'uit', outFile });
  console.timeEnd(timeLabel);
}
startup();
