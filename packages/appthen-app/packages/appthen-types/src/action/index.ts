import { IPublicTypeCompositeValue } from '@alilc/lowcode-types';

/**
 * 动作调用用例
 */
export interface IActionCase {
  /**
   * From Action.name
   */
  name?: string;

  /**
   * 用例名称
   */
  desc: string;

  /**
   * 代码片段
   */
  code?: string;

  /**
   * 表单参数
   */
  form?: IPublicTypeCompositeValue;

  __uuid?: string;
}
