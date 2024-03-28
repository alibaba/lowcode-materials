export type DefaultLabel = string | number | boolean;
export type DefaultValue = string | number | boolean;
type DefaultKey = string | number;
export interface DataSourceNode<Label = DefaultLabel, Value = DefaultValue> {
  label: Label;
  value: Value;
  key?: DefaultKey;
  isLeaf?: boolean;
  children?: this[];
}

export type DataSource<Label = DefaultLabel, Value = DefaultValue> = Array<
  DataSourceNode<Label, Value>
>;

export type PromiseOrSync<T> = Promise<T> | T;
export type DataSourceService<Label = DefaultLabel, Value = DefaultValue> = () => PromiseOrSync<
  DataSource<Label, Value>
>;

export type DataSourceOnLoadNode<Label = DefaultLabel, Value = DefaultValue> = (
  node: DataSourceNode<Label, Value>,
) => DataSourceNode<Label, Value>;
export type LooseDataSource<Label = DefaultLabel, Value = DefaultValue> = Array<
  Value | DataSourceNode<Label, Value>
>;

export type AsyncDataSource<Label = DefaultLabel, Value = DefaultValue> =
  | PromiseOrSync<DataSource<Label, Value>>
  | DataSourceService<Label, Value>;
