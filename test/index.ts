import { compileProject } from '../src/compiler';

const timeLabel = '[uitypes-cli] success! 耗时';
console.time(timeLabel);
compileProject('test/ui-project');
console.timeEnd(timeLabel);