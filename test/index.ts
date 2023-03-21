import { compileProject } from '../src/compiler';

function startup(): void {
  const timeLabel = '[uitype] success! 耗时';
  console.time(timeLabel);
  compileProject('test/ui-project', {
    outFile: 'test/ui-project/output-dts/uitype.d.ts'
  });
  console.timeEnd(timeLabel);
}
startup();