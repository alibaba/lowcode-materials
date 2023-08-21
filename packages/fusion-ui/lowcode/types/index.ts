import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicModelSettingTarget } from '@alilc/lowcode-types';

export interface ISnippet extends IPublicTypeSnippet {
  label?: string;
  title?: string;
}

export interface IComponentDescription extends IPublicTypeComponentMetadata {
  snippets?: ISnippet[];
}

export interface IProps extends IPublicTypeFieldConfig {
  showInListSetter?: boolean;
  initialValue?: Function | any;
  editable?: boolean;
  display?: 'accordion' | 'inline' | 'block' | 'plain' | 'popup' | 'entry' | 'none';
  items?: IProps[] | IPublicTypeFieldConfig[];
}

export interface SetterProps {
  forceInline?: boolean;
  key?: string;
  prop?: IPublicModelSettingTarget;
  selected?: any;
  field?: IPublicModelSettingTarget;
  value: any;
  onChange: Function;
  onInitial?: Function;

  removeProp?: Function;
}

export interface IAssets {
  components?: IComponentDescription[];
}
