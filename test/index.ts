import { compileProject } from '../src/compiler';

function startup(): void {
  const timeLabel = '[uitype] success! 耗时';
  console.time(timeLabel);

  compileProject('test/ui-project', {
    outFile: 'test/ui-project-dist/uitype.d.ts'
  });
  
  // compileProject('F:/cocos/tool/FairyGUI-Project', { 
  //   outFile: 'F:/cocos/client/cocos_slg/assets/lib/uitype/uitype.d.ts'
  // });

  console.timeEnd(timeLabel);
}
startup();
