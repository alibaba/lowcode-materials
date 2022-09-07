import * as React from 'react';
import { Button } from '@alifd/next';

import { ProTable, ProTableProps } from '../../index';
import { Space } from '@/components/container';

export interface EditTableProps extends ProTableProps {
  addPosition?: 'end' | 'start';
  onSave?: (rowIndex: number, record: Record<string, any>, dataSource: any[]) => void;
  onRemove?: (rowIndex: number, record: Record<string, any>, dataSource: any[]) => void;
  onCancel?: (rowIndex: number, record: Record<string, any>, dataSource: any[]) => void;
}

export const EditTable = function (props: EditTableProps) {
  const {
    primaryKey = 'id',
    dataSource: propDataSource,
    actionColumnButtons: propActionColumnButtons = { dataSource: [] },
    onSave,
    onRemove,
    onCancel,
    addPosition = 'end',
    ...otherProps
  } = props;
  const [dataSource, setDataSource] = React.useState(propDataSource);
  const dataSourceRef = React.useRef(dataSource);
  const [actionColumnButtons, setActionColumnButtons] = React.useState(propActionColumnButtons);
  function actionColumnButtonsHidden(showInEdit) {
    return ({ rowRecord }) => {
      return showInEdit ? !!rowRecord.editMode : !rowRecord.editMode;
    };
  }
  const defaultActionColumnButtons = [
    {
      children: '编辑',
      type: 'primary',
      onClick(e, payload) {
        const { rowKey, rowRecord } = payload;
        const _data = dataSourceRef.current.map((item) => {
          if (item[primaryKey] === rowKey) {
            return Object.assign(item, rowRecord, { editMode: true });
          }
          return item;
        });
        setDataSource(_data);
      },
      hidden: actionColumnButtonsHidden(true),
    },
    {
      children: '保存',
      type: 'primary',
      onClick(e, payload) {
        const { rowIndex, rowKey, rowRecord } = payload;
        const _data = dataSourceRef.current.map((item) => {
          if (item[primaryKey] === rowKey) {
            return Object.assign(item, rowRecord, { editMode: false });
          }
          return item;
        });
        onSave && onSave(rowIndex, rowRecord, _data);
        setDataSource(_data);
      },
      hidden: actionColumnButtonsHidden(false),
    },
    {
      children: '取消',
      type: 'primary',
      onClick(e, payload) {
        const { rowIndex, rowKey, rowRecord } = payload;
        const _data = dataSourceRef.current.map((item) => {
          if (item[primaryKey] === rowKey) {
            const keys = Object.keys(item);
            const originKeys = keys.filter((key) => key.startsWith('origin-'));
            originKeys.forEach((originKey) => {
              item[originKey.replace('origin-', '')] = item[originKey];
            });
            return Object.assign(item, { editMode: false });
          }
          return item;
        });
        onCancel && onCancel(rowIndex, rowRecord, _data);
        setDataSource(_data);
      },
      hidden: actionColumnButtonsHidden(false),
    },
    {
      children: '删除',
      type: 'primary',
      onClick(e, payload) {
        const { rowKey, rowIndex, rowRecord } = payload;
        dataSourceRef.current = dataSourceRef.current.filter((item) => item[primaryKey] !== rowKey);
        setDataSource(dataSourceRef.current);
        onRemove && onRemove(rowIndex, rowRecord, dataSourceRef.current);
      },
    },
  ];
  React.useEffect(() => {
    const { dataSource: actionColumnDataSource = [] } = propActionColumnButtons;
    const _actionColumnButtons = {
      ...actionColumnButtons,
      dataSource: defaultActionColumnButtons.concat(actionColumnDataSource),
    };
    setActionColumnButtons(_actionColumnButtons);
  }, [propActionColumnButtons, dataSource]);
  const tableAfter = (
    <Space className="row-add" align="center" justify="center">
      <Button
        text
        type="primary"
        onClick={() => {
          let _data;
          if (addPosition && addPosition === 'start') {
            _data = [
              {
                [primaryKey]: `id-${Math.random().toString(36).substr(-6)}`,
                editMode: true,
              },
            ].concat(dataSource);
          } else {
            _data = dataSource.concat([
              {
                [primaryKey]: `id-${Math.random().toString(36).substr(-6)}`,
                editMode: true,
              },
            ]);
          }
          dataSourceRef.current = _data;
          setDataSource(_data);
        }}
      >
        +新增一行
      </Button>
    </Space>
  );
  return (
    <>
      <ProTable
        className="fusion-ui-edit-table"
        tableAfter={tableAfter}
        dataSource={dataSource}
        actionColumnButtons={actionColumnButtons}
        {...otherProps}
      />
    </>
  );
};
