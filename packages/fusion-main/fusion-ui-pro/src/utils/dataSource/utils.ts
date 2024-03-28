import is from '@sindresorhus/is';
import { LooseDataSource, DefaultValue, DataSource, DefaultLabel, AsyncDataSource } from '@/types';

export const looseDataSourceToDataSource = <Value = DefaultValue>(
  looseDataSource?: LooseDataSource<Value, Value>,
): DataSource<Value, Value> =>
  is.array(looseDataSource)
    ? looseDataSource.map((vo) => {
        if (is.object(vo) && 'value' in vo) {
          return vo;
        }
        return {
          label: vo,
          value: vo,
        };
      })
    : [];

/**
 * 查找节点
 */
export const findNodeFromDataSource = <Label = DefaultLabel, Value = DefaultValue>(
  dataSource: DataSource<Label, Value>,
  value: Value,
) => {
  if (!is.array(dataSource) || is.nullOrUndefined(value)) {
    return undefined;
  }
  return dataSource.find((vo) => vo.value === value);
};
/**
 * dataSource转换为Menu需要的格式
 */
export const dataSourceToMenuDataSource = <Label = DefaultLabel, Value = DefaultValue>(
  dataSource: DataSource<Label, Value>,
): DataSource<Label, Value> =>
  is.array(dataSource)
    ? dataSource.map((vo) => ({
        label: vo.label,
        key: vo.value as any,
        value: vo.value,
      }))
    : [];

export const asyncDataSourceToPromiseDataSource = <Label = DefaultLabel, Value = DefaultValue>(
  asyncDataSource: AsyncDataSource<Label, Value>,
): Promise<DataSource<Label, Value>> => {
  if (is.function_(asyncDataSource)) {
    return Promise.resolve(asyncDataSource());
  }
  return Promise.resolve(asyncDataSource);
};
