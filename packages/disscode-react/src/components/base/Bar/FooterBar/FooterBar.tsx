import React from 'react';
import { observer } from 'mobx-react';
import { Image, Text, View, SafeView } from '../../../..';

import { px } from '../../../../utils';

// @ts-ignore
import defaultIcon from '../../../../assets/images/default_img.png';

export interface FootbarItem {
  name: string;
  text?: string;
  iconPath: string;
  selectedIconPath: string;
  width?: number;
  height?: number;
  /**
   * 图标距离文字距离
   */
  spacing?: number;
  style?: React.CSSProperties;
  styleSelected?: React.CSSProperties;

  /**
   * 徽标提示
   */
  badge?: string;
  /**
   * 红点
   */
  dot?: boolean;
}

interface FooterBarProps {
  /**
   * 文字颜色
   */
  color?: string;
  /**
   * 选中颜色
   */
  selectedColor?: string;
  // position?: 'top' | 'bottom';

  /**
   * 按钮列表
   */
  list?: FootbarItem[];

  style?: React.CSSProperties;

  /**
   * 当前项
   */
  current?: number | string;
  onChange?: (index: number, name?: string) => void;
}

const FooterBar = observer(
  ({ current = 0, list = [], color, selectedColor, style, onChange }: FooterBarProps) => {
    const changeTab = (index: number, name?: string) => {
      onChange && onChange(index, name);
    };

    return (
      <View>
        <View className="cs-footer M-flexbox-horizontal M-bd-t" style={style}>
          {list.map((item, index) => {
            const isSelect =
              typeof current === 'string' ? current === item.name : current === index;
            return (
              <View
                key={index}
                onClick={changeTab.bind(null, index, item.name)}
                activeOpacity={1}
                className={`cs-footer__item M-gb-click M-text-select-none M-flex-item M-flexbox-vertical M-line-height-1 ${
                  isSelect ? 'cs-footer__item--active' : ''
                }`}
              >
                <View className=" M-flex-item M-vertical-bottom M-horizontal-center">
                  <View
                    className="cs-footer__iconContainer"
                    style={{
                      paddingBottom: item.spacing ? px((item?.spacing || 0) * 2) : undefined,
                    }}
                  >
                    <Image
                      className={`cs-footer__icon ${isSelect ? '' : 'M-display-none'}`}
                      src={item.selectedIconPath || defaultIcon}
                      style={{
                        width: px((item?.width || 0) * 2),
                        height: px((item?.height || 0) * 2),
                      }}
                    />
                    <Image
                      className={`cs-footer__icon ${!isSelect ? '' : 'M-display-none'}`}
                      src={item.iconPath || defaultIcon}
                      style={{
                        width: px((item?.width || 0) * 2),
                        height: px((item?.height || 0) * 2),
                      }}
                    />

                    {/* Badge */}
                    {!!item.badge && (
                      <View className="cs-footer__badge M-center-all">
                        <Text className="M-f-c-fff M-f-s-12" style={{ lineHeight: px(36) }}>
                          {item.badge}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                <View className="M-center-all M-p-v-b-5">
                  <Text
                    className="M-f-s-12"
                    style={{
                      color: isSelect ? selectedColor : color,
                      fontSize: style?.fontSize,
                    }}
                  >
                    {item.text || 'text'}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <SafeView
          forceInset={{ top: 'never', bottom: 'always' }}
          style={{ backgroundColor: '#fff' }}
        />
      </View>
    );
  },
);

export default FooterBar;
