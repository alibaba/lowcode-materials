import React from 'react';
import { px } from '../../../utils';

import View from '../View';
import Text from '../Text';
import Image from '../Image';

//@ts-ignore
import NoIcon from '../../../assets/images/icon/no.png';

interface ListEmptyProps {
  text: string;
  // icon?: 'no' | 'no-news';
  children?: React.ReactNode;
}

class ListEmpty extends React.Component<ListEmptyProps> {
  render() {
    const { text, children } = this.props;
    return (
      <View className='M-center-all' style={{ height: px(600) }}>
        <View>
          <View className='M-center-all'>
            <Image style={{ width: px(250), height: px(150) }} src={NoIcon} />
          </View>
          <View className='M-center-all M-p-t-15'>
            <Text className='M-f-s-14 M-text-align-center M-f-c-999'>{text}</Text>
          </View>
          <View className='M-p-t-15'>{children}</View>
        </View>
      </View>
    );
  }
}

export default ListEmpty;
