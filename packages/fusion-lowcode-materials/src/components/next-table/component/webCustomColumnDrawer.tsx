import React from "react";
import { Drawer, Button, Icon, Message, Checkbox, Switch } from '@alifd/next';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import { Table } from '@alifd/next';

function getSelectedRowKeys(columns: IWebCustomColumnDrawerProps['columns'] = []) {
  const selectedRowKeys: string[] = [];

  columns && columns.forEach((item) => {
    const { hidden, dataKey } = item;

    if (!hidden && dataKey) {
      selectedRowKeys.push(dataKey);
    }
  });

  return selectedRowKeys;
}

export interface IWebCustomColumnDrawerProps {
  columns?: any[];
  onOk?: (columns: IWebCustomColumnDrawerProps['columns']) => void;
  onClose?: () => void;
  locale?: {
    [propKey: string]: string;
  }
  deepTablePrefix?: string;
  visible: boolean;
}

interface IWebCustomColumnDrawerState {
  defaultColumns: IWebCustomColumnDrawerProps['columns'];
  currentColumns: IWebCustomColumnDrawerProps['columns'];
}

export default class WebCustomColumnDrawer extends React.Component<IWebCustomColumnDrawerProps, IWebCustomColumnDrawerState> {
  static defaultProps = {
    columns: [],
  };

  constructor(props: IWebCustomColumnDrawerProps) {
    super(props);

    const { columns } = this.props;

    this.state = {
      defaultColumns: cloneDeep(columns),
      currentColumns: cloneDeep(columns),
    };
  }

  componentWillReceiveProps(nextProps: IWebCustomColumnDrawerProps) {
    const { defaultColumns } = this.state;
    const { columns: nextColumns } = nextProps;

    if (!isEqual(defaultColumns, nextColumns)) {
      this.setState({
        defaultColumns: cloneDeep(nextColumns),
        currentColumns: cloneDeep(nextColumns),
      });
    }
  }

  isHidden(dataKey: string) {
    const { currentColumns = [] } = this.state;

    const column = currentColumns.find((item) => {
      return item.dataKey === dataKey;
    });

    return column ? (!!column.hidden) : false;
  }

  isLocked(dataKey: string) {
    const { currentColumns = [] } = this.state;

    const column = currentColumns.find((item) => {
      return item.dataKey === dataKey;
    });

    let lock = column && column.lock;
    if (lock === "none") {
      lock = undefined;
    }

    return !!lock;
  }

  isAllColumnsShown() {
    const { currentColumns = [] } = this.state;

    return !currentColumns.some((item) => {
      return item.hidden;
    });
  }

  handleCheck(checked: boolean, dataKey: string) {
    const { currentColumns = [] } = this.state;

    const column = currentColumns.find((item) => {
      return item.dataKey === dataKey;
    });

    if (column) {
      column.hidden = !checked;
      column.lock = false;
      this.forceUpdate();
    }
  }

  handleLock(checked: boolean, dataKey: string) {
    const { currentColumns = [] } = this.state;

    const column = currentColumns.find((item) => {
      return item.dataKey === dataKey;
    });

    if (column) {
      column.lock = checked ? 'left' : undefined;
      this.forceUpdate();
    }
  }

  restoreDefault() {
    const { defaultColumns } = this.state;

    this.setState({
      currentColumns: cloneDeep(defaultColumns),
    });
  }

  handleOk() {
    const { currentColumns = [] } = this.state;
    const { onOk, locale = {} } = this.props;

    let shownCount = 0;
    let fixedCount = 0;
    currentColumns.forEach((colums) => {
      const { lock, hidden } = colums;

      if (!hidden) {
        shownCount++;
      }

      if (lock && lock != "none") {
        fixedCount++;
      }
    });

    if (currentColumns.length >= 2 && shownCount < 2) {
      Message.error(locale.tipLeastColumns);
      return;
    }

    onOk && onOk(currentColumns);
  }

  handleCheckAll(checked: boolean) {
    const { currentColumns = [] } = this.state;

    currentColumns.forEach((item) => {
      return item.hidden = !checked;
    });

    this.forceUpdate();
  }

  renderColumnShown(value: any, record: any, hasCheckbox: boolean) {
    const { deepTablePrefix } = this.props;
    const { dataKey } = record;

    return <div className={`${deepTablePrefix}cell-wrap`}>
      {hasCheckbox ? <Checkbox className={`${deepTablePrefix}cell-checkbox`} onChange={(checked) => {
        this.handleCheck(checked, dataKey);
      }} checked={!this.isHidden(dataKey)} /> : null}

      <span className={`${deepTablePrefix}cell`}>
        {value}
      </span>
    </div>;
  }

  renderColumnFixed(value: any, rowIndex: string, record: any) {
    const { dataKey } = record;

    return this.isHidden(dataKey) ? null : <Switch
      checked={this.isLocked(dataKey)}
      onChange={(checked) => {
        this.handleLock(checked, dataKey);
      }} />;
  }
  render() {
    const { deepTablePrefix, onClose, visible, locale = {} } = this.props;
    const { currentColumns = [] } = this.state;
    return (
      <div>
        <Drawer
          className={`${deepTablePrefix}web-custom-column-drawer`}
          width="400px" height="100%" visible={visible} placement="right"
          closeable="mask,esc" onClose={onClose}>

          <div className={`${deepTablePrefix}title`}>
            <div className={`${deepTablePrefix}title-txt`}>{locale.customColumn}</div>
            <Icon className={`${deepTablePrefix}close`}
              type="close" size="medium" onClick={onClose} />
          </div>

          <div className={`${deepTablePrefix}center`}>
            <Table style={{ margin: '12px' }}
              dataSource={currentColumns.filter(item => {
                return !item.isGroup
              })}
              hasBorder={false} primaryKey="dataKey"
              rowSelection={{
                selectedRowKeys: getSelectedRowKeys(currentColumns),
                onSelectAll: (selected) => {
                  this.handleCheckAll(selected);
                },
                onSelect: (selected, records) => {
                  const { dataKey } = records;
                  this.handleCheck(selected, dataKey);
                },
              }}>
              <Table.Column cell={(value, index, record) => {
                return this.renderColumnShown(value, record, false);
              }} title={locale.showColumn} dataIndex="title"
                width="60%" />
              <Table.Column cell={this.renderColumnFixed.bind(this)} title={locale.stickColumn} dataIndex="lock"
                width="40%" />
            </Table>
          </div>

          <div className={`${deepTablePrefix}bottom`}>
            <Button className={`${deepTablePrefix}button`} onClick={onClose}>{locale.cancel}</Button>
            <Button className={`${deepTablePrefix}button`}
              onClick={this.restoreDefault.bind(this)}>{locale.restoreDefault}</Button>
            <Button style={{ width: 80 }} type="primary" onClick={this.handleOk.bind(this)}>{locale.submit}</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}
