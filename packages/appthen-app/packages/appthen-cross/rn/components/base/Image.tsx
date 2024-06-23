import React from 'react';
import { IImageProps } from './Image.PropType';
import omit from 'omit.js';
import { Image } from '@tarojs/components';

const defaultImage = 'https://cdn.appthen.com/default_img.png?v=2';

class TImage extends React.Component<IImageProps> {
  static displayName = 'Image';

  render() {
    const { className = '', style = {}, src, fit, ...other } = this.props;
    return (
      <Image
        mode={fit ? 'widthFix' : 'scaleToFill'}
        className={className}
        src={src || defaultImage}
        style={style}
        {...omit(other, ['remote'])}
      />
    );
  }
}

export default TImage;
