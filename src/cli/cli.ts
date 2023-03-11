import { program } from 'commander';
import { loadCommands } from './cli.loader';

/**
 * @description startup
 * @author xfy
 * @export
 */
export function startup(): void {
  const pkg = require('../../package.json');
  const version = pkg.version;

  program
    .version(version, '-v, --version', 'uitype 版本.')
    .usage('<command> [options]')
    .helpOption('-h, --help', '帮助.');

  // 处理无效命令
  invalidCommandHandler();
  // 加载命令列表
  loadCommands(program);

  program.parse(process.argv);
  const [, , cmd] = process.argv;
  if (cmd === undefined) {
    program.outputHelp();
  }
}

/**
 * @description 处理无效命令
 * @author xfy
 * @param {CommanderStatic} program
 */
function invalidCommandHandler(): void {
  program.on('command:*', () => {
    console.error(`[ERROR]\n无效命令：${program.args.join(' ')}`);
    console.log(`[Log] 使用'--help'查看命令列表`);
  });
}
