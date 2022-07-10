import { useI18nBundle } from '@/provider';
import { ColumnProps } from '@alifd/next/types/table';
import * as React from 'react';
import { ProTableBaseProps } from '../../../types';

type IndexColumnProps = Pick<ProTableBaseProps, 'indexColumn' | 'indexColumnProps'>;
/**
 * 序号列
 */
export const useIndexColumn = ({
  indexColumn,
  indexColumnProps,
}: IndexColumnProps): ColumnProps => {
  const i18nBundle = useI18nBundle('ProTable');
  if (!indexColumn) {
    return undefined;
  }
  return {
    width: 70,
    lock: 'left',
    title: i18nBundle.indexColumnTitle,
    cell: (value: any, index: number) => (
      <div className="fusion-ui-tablex-serial-number">{index + 1}</div>
    ),
    align: 'center',
    ...indexColumnProps,
  };
};
