import React from 'react';
import cls from 'classnames';
import View from '../../View';
import { ITabViewProps } from './Tabview.PropType';
import FooterBar from '../../Bar/FooterBar';

class TabView extends React.Component<ITabViewProps> {
  state = {
    current: 0,
  };
  onTabChange = (index: number, name?: string) => {
    this.setState({
      current: name || index,
    });
  };

  render() {
    const { onTabChange } = this;
    const { current } = this.state;
    const { color, selectedColor, style, tabbarStyle, list } = this.props;
    return (
      <View className='M-flex-item M-flexbox-vertical'>
        <View className='M-flex-item M-flexbox-vertical' style={style}>
          {list?.map((item, index) => {
            const isSelect = typeof current === 'string' ? current === item.name : current === index;
            return (
              <View
                className={cls('M-flexbox-vertical', 'M-flex-item', {
                  'M-display-none': !isSelect,
                })}
                key={String(item.name || index)}
              >
                {item.view}
              </View>
            );
          })}
        </View>
        <FooterBar color={color} selectedColor={selectedColor} style={tabbarStyle} list={list} current={current} onChange={onTabChange} />
      </View>
    );
  }
}

export default TabView;
