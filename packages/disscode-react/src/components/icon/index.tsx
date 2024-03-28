import classNames from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import React from 'react';
import { Text, Image } from '@tarojs/components';
import { AtIconProps } from '../../../types/icon';
import { mergeStyle, pxTransform } from '../../common/utils';

export default class AtIcon extends React.Component<AtIconProps> {
  public static defaultProps: AtIconProps;
  public static propTypes: InferProps<AtIconProps>;

  public render(): JSX.Element {
    const { className, prefixClass, value, size, color, svg, style } = this.props;

    const _size = `${pxTransform(parseInt(String(size)) * 2)}`;

    const rootStyle = {
      fontSize: _size,
      color,
    };

    const iconName = value ? `${prefixClass}-${value}` : '';

    return svg ? (
      !svg.includes('data:') ? (
        <div
          style={{
            width: _size,
            height: _size,
            color: color,
            ...style,
          }}
          dangerouslySetInnerHTML={{
            __html: svg || '',
          }}
        />
      ) : (
        <Image
          svg
          src={svg}
          style={{
            width: _size,
            height: _size,
            color: color,
            ...style,
          }}
        />
      )
    ) : (
      <Text
        className={classNames(prefixClass, iconName, className)}
        style={mergeStyle(rootStyle, (style as object) || {})}
      ></Text>
    );
  }
}

AtIcon.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24,
};

AtIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
