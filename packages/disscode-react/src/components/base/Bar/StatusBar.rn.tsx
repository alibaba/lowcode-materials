import React, { Component } from 'react';
import { View, Platform, StatusBar as RnStatusBar } from 'react-native';

import { observer } from 'mobx-react';

import { StatusBarProps } from './StatusBar.PropType';

@observer
class StatusBar extends Component<StatusBarProps> {
  render() {
    return <RnStatusBar barStyle={this.props.mode === 'light' ? 'light-content' : 'dark-content'} backgroundColor='rgba(0,0,0,0)' translucent />;
  }
}
export default StatusBar;
