import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { CompilerOptions, ProjectConfig } from './types'

// 编译选项
const compilerOptions: CompilerOptions = {
  publishName: 'uit',
  assetsName: 'assets',
  outFile: './uitype/uitype.d.ts'
};

// tag 映射
const tagMapping: Record<string, string | undefined> = {
  group: 'fairygui.GGroup',
  Group: 'fairygui.GGroup',
  object: 'fairygui.GObject',
  Object: 'fairygui.GObject',
  graph: 'fairygui.GGraph',
  Graph: 'fairygui.GGraph',
  image: 'fairygui.GImage',
  Image: 'fairygui.GImage',
  movieclip: 'fairygui.GMovieClip',
  MovieClip: 'fairygui.GMovieClip',
  root: 'fairygui.GRoot',
  Root: 'fairygui.GRoot',
  text: 'fairygui.GTextField',
  TextField: 'fairygui.GTextField',
  richtext: 'fairygui.GRichTextField',
  RichTextField: 'fairygui.GRichTextField',
  textinput: 'fairygui.GTextInput',
  TextInput: 'fairygui.GTextInput',
  loader: 'fairygui.GLoader',
  Loader: 'fairygui.GLoader',
  loader3D: 'fairygui.GLoader3D',
  Loader3D: 'fairygui.GLoader3D',
  component: 'fairygui.GComponent',
  Component: 'fairygui.GComponent',
  label: 'fairygui.GLabel',
  Label: 'fairygui.GLabel',
  button: 'fairygui.GButton',
  Button: 'fairygui.GButton',
  combobox: 'fairygui.GComboBox',
  ComboBox: 'fairygui.GComboBox',
  slider: 'fairygui.GSlider',
  Slider: 'fairygui.GSlider',
  progressbar: 'fairygui.GProgressBar',
  ProgressBar: 'fairygui.GProgressBar',
  scrollbar: 'fairygui.GScrollBar',
  ScrollBar: 'fairygui.GScrollBar',
  list: 'fairygui.GList',
  List: 'fairygui.GList',
  tree: 'fairygui.GTree',
  Tree: 'fairygui.GTree',
  controller: 'fairygui.Controller',
  transition: 'fairygui.Transition'
}

/**
 * @description 加载项目配置
 * - 如果配置不存在则自动创建一个默认配置
 * @param {string} projectRoot 项目根目录
 * @return {*}  {(ProjectConfig | undefined)}
 */
export function loadProjectConfig(projectRoot: string): ProjectConfig | undefined {
  // 检查项目目录
  if(existsSync(projectRoot) === false) {
    console.log('项目根目录不存在！root: ' + projectRoot);
    return undefined;
  }

  const configFile = join(projectRoot, 'uitype.config.json');
  if(existsSync(configFile) === false) {
    const cfg: ProjectConfig = { compilerOptions, tagMapping };
    writeFileSync(configFile, JSON.stringify(cfg, undefined, 2));
    return cfg;
  }

  const configContent = readFileSync(configFile);
  const config = JSON.parse(configContent.toString('utf-8')) as ProjectConfig;
  return config;
}