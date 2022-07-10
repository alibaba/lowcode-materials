import { ComponentMetadata, Snippet, FieldConfig, SettingTarget } from '@ali/lowcode-types';

export interface ISnippet extends Snippet {
  label?: string;
  title?: string;
}

export interface IComponentDescription extends ComponentMetadata {
  snippets?: ISnippet[];
}

export interface IProps extends FieldConfig {
  showInListSetter?: boolean;
  initialValue?: Function | any;
  editable?: boolean;
  display?: 'accordion' | 'inline' | 'block' | 'plain' | 'popup' | 'entry' | 'none';
  items?: Iprops[] | FieldConfig[];
}

export interface SetterProps {
  forceInline?: boolean;
  key?: string;
  prop?: SettingTarget;
  selected?: any;
  field?: SettingTarget;
  value: any;
  onChange: Function;
  onInitial?: Function;

  removeProp?: Function;
}

export interface IAssets {
  components?: IComponentDescription[];
}
