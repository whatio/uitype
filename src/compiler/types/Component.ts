import  type { ComponentAttribute } from './ComponentAttribute';

/**
 * @description 组件
 */
export interface Component {
  // 组件名
  name: string;
  // 组件扩展类型
  readonly extention: string;
  // 属性列表
  readonly attributes: ComponentAttribute[];
}

