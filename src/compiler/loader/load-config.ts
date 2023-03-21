import { existsSync, readFileSync } from "fs";
import { type Element, xml2js } from "xml-js";

/**
 * @description 配置
 */
export interface Config extends Element {
  // tag name
  readonly name: string;
  // 属性对象
  readonly attributes?: { [x: string]: string | undefined };
  // 子对象
  readonly elements?: Config[];
}

/**
 * @description 加载配置文件
 * @param {string} file
 * @return {*}  {(Element | undefined)}
 */
export function loadConfig(file: string): Config | undefined {
  if (existsSync(file) === false) {
    console.log(`[配置文件不存在！] [file=${file}]`);
    return undefined;
  }
  const fileContent = readFileSync(file).toString('utf-8');
  const config = xml2js(fileContent) as Config;
  return config;
}