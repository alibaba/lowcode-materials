import * as React from 'react';
import { FC, ReactNode } from 'react';
import { useDataSourceNode } from './hooks';
import { AsyncDataSource, DefaultLabel, DefaultValue } from '@/types';

export interface DataSourceLabelProps<Label = DefaultLabel, Value = DefaultValue> {
  dataSource?: AsyncDataSource<Label, Value>;
  value?: Value;
  defaultLabel?: ReactNode;
}
export const DataSourceLabel: FC<DataSourceLabelProps> = (props) => {
  const { data } = useDataSourceNode(props);
  return <>{data?.label || props.defaultLabel}</>;
};
