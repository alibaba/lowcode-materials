import { ColumnProps } from '@alifd/next/types/table';
import * as React from 'react';
import is from '@sindresorhus/is';
import {
  ProTableBaseProps,
  ProTableRowRecord,
  ProTableProps,
  ProTableActionColumnButtons,
  ProTableRowPayload,
} from '../../../types';
import { useI18nBundle } from '@/provider';
import { emptyFn } from '@/utils/constants';
import { usePersistFn } from 'ahooks';
import get from 'lodash/get';
import { ProTableButtonGroup, ProTableButtonGroupProps } from '../../pro-table-button-group/index';

type ActionColumnProps = Pick<
  ProTableBaseProps,
  | 'actionColumn'
  | 'actionButtonGroupProps'
  | 'actionColumnButtons'
  | 'actionColumnProps'
  | 'actionColumnPredication'
  | 'onActionColumnClick'
  | 'primaryKey'
>;

const calcButtonWidth = (str: React.ReactNode) => {
  if (is.string(str)) {
    return str.length * 12 + 12;
  }
  return 50;
};
/**
 * 操作列
 */
export const useActionColumn = ({
  actionColumn,
  actionColumnProps,
  actionColumnPredication,
  actionButtonGroupProps,
  actionColumnButtons,
  onActionColumnClick,
  primaryKey,
}: ActionColumnProps): ColumnProps => {
  const i18nBundle = useI18nBundle('ProTable');
  const handleActionColumnClick = usePersistFn(onActionColumnClick || emptyFn);
  const buttonGroupProps = {
    dataSource: actionColumn,
    ...(actionColumnButtons || actionButtonGroupProps),
  };

  if (!is.array(buttonGroupProps.dataSource) || buttonGroupProps.dataSource.length === 0) {
    return undefined;
  }

  const width =
    actionColumnProps?.width ||
    buttonGroupProps.dataSource
      .slice(0, 3)
      .map((vo) => calcButtonWidth(vo.children))
      .reduce((p, vo) => p + vo, buttonGroupProps.dataSource.length > 3 ? 65 : 30);

  return {
    width,
    lock: 'right',
    title: i18nBundle.operation,
    cell: (value, rowIndex, rowRecord) => (
      <ActionColumnButtonGroup
        rowIndex={rowIndex}
        rowRecord={rowRecord}
        primaryKey={primaryKey}
        actionColumnPredication={actionColumnPredication}
        onActionColumnClick={handleActionColumnClick}
        buttonGroupProps={buttonGroupProps as any}
      />
    ),
    ...actionColumnProps,
  };
};

interface ActionColumnButtonGroupProps {
  rowIndex: number;
  rowRecord: ProTableRowRecord;
  actionColumnPredication?: ProTableProps['actionColumnPredication'];
  onActionColumnClick?: ProTableProps['onActionColumnClick'];
  primaryKey: ProTableProps['primaryKey'];
  buttonGroupProps: ProTableActionColumnButtons;
}
const ActionColumnButtonGroup: React.FC<ActionColumnButtonGroupProps> = ({
  rowIndex,
  rowRecord,
  actionColumnPredication,
  onActionColumnClick,
  primaryKey,
  buttonGroupProps,
}) => {
  const payload = React.useMemo<ProTableRowPayload>(
    () => ({
      rowKey: rowRecord[primaryKey],
      rowIndex,
      rowRecord,
    }),
    [rowIndex, primaryKey, rowRecord],
  );
  const { dataSource, ...otherProps } = buttonGroupProps;
  const realDataSource = React.useMemo<ProTableButtonGroupProps['dataSource']>(() => {
    const buttons = is.function_(actionColumnPredication)
      ? actionColumnPredication({
          actionColumn: dataSource,
          index: payload.rowIndex,
          record: payload.rowRecord,
        })
      : dataSource;
    return is.array(buttons)
      ? buttons.map((vo) => ({
          onClick: () => {
            onActionColumnClick({
              currentActionKey: vo.key,
              selectedRowKey: payload.rowKey,
              record: payload.rowRecord,
            });
          },
          ...vo,
          hidden: is.string(vo.hidden)
            ? () => !!get(payload.rowRecord, vo.hidden as string)
            : vo.hidden,
          disabled: is.string(vo.disabled)
            ? () => !!get(payload.rowRecord, vo.disabled as string)
            : vo.disabled,
        }))
      : [];
  }, [actionColumnPredication, dataSource, onActionColumnClick, payload]);
  return <ProTableButtonGroup text payload={payload} {...otherProps} dataSource={realDataSource} />;
};

ActionColumnButtonGroup.defaultProps = {
  onActionColumnClick: emptyFn,
};
