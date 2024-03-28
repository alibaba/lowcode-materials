import { DefaultLabel, DefaultValue, AsyncDataSource } from '@/types';
import { useRequest } from 'ahooks';
import { findNodeFromDataSource, asyncDataSourceToPromiseDataSource } from './utils';
import { useMemo } from 'react';

interface UseDataSourceOptions<Label = DefaultLabel, Value = DefaultValue> {
  dataSource?: AsyncDataSource<Label, Value>;
}

export const useDataSource = <Label = DefaultLabel, Value = DefaultValue>(
  options: UseDataSourceOptions<Label, Value>,
) => useRequest(() => asyncDataSourceToPromiseDataSource(options.dataSource));

interface UseDataSourceNodeOptions<Label = DefaultLabel, Value = DefaultValue> {
  dataSource?: AsyncDataSource<Label, Value>;
  value?: Value;
}
export const useDataSourceNode = <Label = DefaultLabel, Value = DefaultValue>(
  options: UseDataSourceNodeOptions<Label, Value>,
) => {
  const { data: dataSource, ...res } = useDataSource(options);
  const data = useMemo(
    () => findNodeFromDataSource(dataSource, options.value),
    [dataSource, options.value],
  );
  return {
    data,
    dataSource,
    ...res,
  };
};
