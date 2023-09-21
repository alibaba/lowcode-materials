import { IPublicTypeComponentMetadata, IPublicTypeSnippet, IPublicTypeFieldConfig, IPublicModelSettingField } from '@alilc/lowcode-types';

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
  items?: IProps[] | IPublicTypeFieldConfig[];
}

export interface SetterProps {
  forceInline?: boolean;
  key?: string;
  prop?: IPublicModelSettingField;
  selected?: any;
  field?: IPublicModelSettingField;
  value: any;
  onChange: Function;
  onInitial?: Function;

  removeProp?: Function;
}

export interface IAssets {
  components?: IComponentDescription[];
}
