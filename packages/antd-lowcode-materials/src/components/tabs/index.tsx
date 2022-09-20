import React, { Component } from 'react';
import { TabPaneProps, Tabs as OriginalTabs } from 'antd';
import { warning } from '../../utils/warning'
import type { Tab } from 'rc-tabs/lib/interface';

class Tabs extends Component<any> {
  state = {
    activeKey: this.props.activeKey ?? this.props.defaultActiveKey,
  };

  private _handleChange = (key: string) => {
    this.setActiveKey(key);
  };

  // 编辑器里可以通过 this.$(refId).setActiveKey(key) 调用
  setActiveKey = (key: string) => {
    const { onChange = () => {} } = this.props;
    this.setState({ activeKey: key });
    onChange(key);
  };

  // 编辑器里可以通过 this.$(refId).getActiveKey() 调用
  getActiveKey = () => {
    return this.state.activeKey;
  };

  render() {
    const { props } = this;
    const { activeKey } = this.state;

    const { children } = props

    let items = props.items

    // props.items 存在，只认 props.items
    // 兼容代码：props.childrens 反推 props.items
    if (!props.items && Array.isArray(children) && children.length > 0) {
      warning('Tabs.TabPane is deprecated. Please use `items` directly.')
      items = children.map((node: React.ReactElement<TabPaneProps>) => {
        if (React.isValidElement(node)) {
          const { key, props } = node;
          const { tab, ...restProps } = props || {};
          const item: Tab = {
            key: String(key),
            ...restProps,
            label: tab,
          };
          return item;
        }
        return null
      }).filter(Boolean)
    }

    return (
      <OriginalTabs
        {...props}
        items={items}
        activeKey={activeKey}
        onChange={this._handleChange}
      />
    );
  }
}

(Tabs as any).TabPane = OriginalTabs.TabPane;

export default Tabs;
