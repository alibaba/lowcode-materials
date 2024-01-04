import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { observer } from 'mobx-react';

import { SafeViewProps } from './SafeView.PropType';

@observer
class SafeView extends Component<SafeViewProps> {
  render() {
    const { forceInset } = this.props;
    return (
      <SafeAreaView style={this.props.style} edges={([forceInset.top === 'always' ? 'top' : '', forceInset.bottom === 'always' ? 'bottom' : '']).filter((item) => item !== '')}>
        {/* {this.props.forceInset && this.props.forceInset.top !== 'never' && Platform.OS === 'android' && (
          <View style={{ height: StatusBar.currentHeight || 20 }} />
        )} */}
      </SafeAreaView>
    );
  }
}
export default SafeView;
