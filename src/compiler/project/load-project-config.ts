import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { ProjectConfig } from "./types";

/**
 * @description 加载项目配置
 * @param {string} projectRoot 项目根目录
 * @return {*}  {(ProjectConfig | undefined)}
 */
export function loadProjectConfig(projectRoot: string): ProjectConfig | undefined {
  // 检查项目目录
  if(existsSync(projectRoot) === false) {
    console.log('项目根目录不存在！root: ' + projectRoot);
    return undefined;
  }

  // 读取项目配置
  const userConfigFile = join(projectRoot, 'uitype.config.json');
  const userConfigFileExist = existsSync(userConfigFile);
  const configFile = userConfigFileExist ? userConfigFile : join(__dirname, 'project-config.json');
  if(existsSync(configFile) === false) {
    console.log('读取项目配置失败！');
    return undefined;
  }

  const configContent = readFileSync(configFile);
  const config = JSON.parse(configContent.toString('utf-8')) as ProjectConfig;
  if(userConfigFileExist === false) {
    writeFileSync(userConfigFile, configContent);
  }
  return config;
}