import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

interface IActionCase {
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
}

export interface ExtendComponentMetadata extends IPublicTypeComponentMetadata {
  hideInProjectType: string[];
}

declare module '@alilc/lowcode-types' {
  export interface IPublicTypeComponentMetadata {
    hideInProjectType?: string[];
  }
  export interface IPublicTypeConfigure {
    publicMethods?: IActionCase[];
  }
}

export declare type ConfigureSupportEvent = string | {
  template?: string;
};
