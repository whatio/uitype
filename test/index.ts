import { compileProject } from '../src/compiler';

function startup(): void {
  const timeLabel = '[uitype] success! 耗时';
  console.time(timeLabel);

  compileProject('test/ui-project', {
    outFile: 'test/ui-project/output-dts/uitype.d.ts'
  });

  // compileProject('F:/cocos_rpg/trunk/tool/FairyGUI-Project', { 
  //   outFile: 'F:/cocos_rpg/trunk/client/cocos_rpg/assets/lib/uitype/index.d.ts'
  // });

  console.timeEnd(timeLabel);
}
startup();
