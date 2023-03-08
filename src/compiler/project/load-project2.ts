import { existsSync, readdirSync, readFileSync } from "fs";
import { join } from "path";
import type { Project, ProjectConfig } from './types';

export function loadProject(projectRoot: string): Project | undefined {

  // 读取项目配置
  let config: ProjectConfig;
  const defaultConfigContent = readFileSync('./default-config.json').toString('utf-8');
  const defaultConfig = JSON.parse(defaultConfigContent) as ProjectConfig;
  const projectConfigFile = join(projectRoot, 'config.uitype.json');
  if(existsSync(projectConfigFile)) {
    const projectConfigContent = readFileSync(projectConfigFile).toString('utf-8');
    const projectConfig = JSON.parse(projectConfigContent) as ProjectConfig;
    config = {
      ...projectConfig,
      ...defaultConfig
    }
  } 
  else {
    config = defaultConfig;
  }
  const { compilerOptions } = config;

  // 检查资源目录
  const assetsRoot = join(projectRoot, compilerOptions.assetsName ?? 'assets');
  if(existsSync(assetsRoot) === false) {
    console.log('找不到项目资源目录！ derectory: ' + assetsRoot);
    return undefined;
  }

  const { include, exclude } = compilerOptions;

  readdirSync(assetsRoot).forEach(name => {

    if(exclude?.length && exclude.includes(name)) {
      return;
    }
    if(include?.length && include.includes(name) === false) {
      return;
    }

    const packagePath = join(assetsRoot, name);

  });




  const project: Project = {
    config
  }
  return project;
}