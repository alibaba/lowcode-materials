import React from 'react';

import View from '../../../View';
import Image from '../../../Image';

interface RadioWidgetProps {
  type: 'checkbox' | 'radio';
  active?: boolean;
  activeColor?: string;
  onClick?: () => void;
}

const RadioWidget = ({ type, active, activeColor, onClick }: RadioWidgetProps) => {
  return (
    <View
      onClick={onClick}
      activeOpacity={0.8}
      className={`cs-radio-widget M-center-all M-text-select-none M-gb-click ${active ? 'cs-radio-widget--active' : ''}`}
    >
      {active &&
        (type === 'checkbox' ? (
          <Image src={require('./images/active.png')} className='cs-radio-widget__icon' />
        ) : (
          <View className='M-b-c-w cs-radio-widget__radio' />
        ))}
    </View>
  );
};

export default RadioWidget;
