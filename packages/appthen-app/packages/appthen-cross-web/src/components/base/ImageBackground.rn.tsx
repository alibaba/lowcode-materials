import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

import { Dimensions, Image, ImageBackground as RnImageBackground } from 'react-native';
const { width: wt, height: ht } = Dimensions.get("window");

interface IProps {
  src?: string | number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onLoad?: () => void;
}

@observer
export class ImageBackground extends React.Component<IProps> {

  @observable imageSize = {
    width: 0,
    height: 0,
  }

  render() {
    const { imageSize } = this;
    let { style = {}, src, children, ...other } = this.props;
    let _style: any = style;
    let imageStyle: React.CSSProperties = {
      width: imageSize.width,
      height: imageSize.height,
    };
    if (src && !imageSize.height && style.backgroundSize === '100% auto') {
      Image.getSize(src, (width, height) => {
        this.imageSize = {
          width: wt,
          height: wt * height / width,
        }
      })
    }

    const source: any = typeof src === 'string' ? { uri: src } : src;
    return (
      <RnImageBackground imageStyle={style.backgroundSize ? imageStyle : undefined} source={source} style={_style} {...other}>
        {children}
      </RnImageBackground>
    );
  }
}

export default ImageBackground;
