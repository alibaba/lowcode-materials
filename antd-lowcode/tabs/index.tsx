import React, { Component } from 'react';
import { Tabs as OriginalTabs } from 'antd';

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

    return (
      <OriginalTabs
        {...props}
        activeKey={activeKey}
        onChange={this._handleChange}
      />
    );
  }
}

(Tabs as any).TabPane = OriginalTabs.TabPane;

export default Tabs;
