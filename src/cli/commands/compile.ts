import { type Command } from 'commander';
import { compileProject, CompilerOptions } from '../../compiler';

/**
 * @description 加载编译命令
 * @author xfy
 * @export
 * @param {Command} program
 */
export function loadCompileCommand(program: Command): void {
  const cmd = program.command('compile').alias('c').description('编译项目');
  cmd.requiredOption('-r, --root <path>', '项目根目录[必选]');
  cmd.requiredOption('-o, --outFile <path>', '项目输出文件路径[必选]');
  cmd.option('-p, --publishName <nmespace>', '发布名称-根命名空间');
  cmd.option('-i, --include <name...>', '仅编译指定组件包列表');
  cmd.option('-e, --exclude <name...>', '不编译指定组件包列表');
  cmd.action(compile);
}

function compile(options: CompilerOptions & {root: string}) {
  const timeLabel = '[uitype] success！耗时';
  console.time(timeLabel);
  compileProject(options.root, options);
  console.timeEnd(timeLabel);
}
