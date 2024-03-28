import React from 'react';

import View from '../View';
import Text from '../Text';

interface ListTipProps {
  loading: boolean;
  nodata: boolean;
  style?: any;
}

class ListTip extends React.Component<ListTipProps> {
  render() {
    const { props } = this;
    return (
      <View className='M-center-all' style={{ ...props.style }}>
        {props.loading && !props.nodata && <Text className='M-f-s-14 M-f-c-666'> 正在加载... </Text>}
        {props.nodata && <Text className='M-f-s-14 M-f-c-666'> 没有更多了 </Text>}
      </View>
    );
  }
}

export default ListTip;
