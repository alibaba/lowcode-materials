import * as React from 'react';
interface ImageProps {
  alt?: string;
  title?: string;
  src?: string;
  style?: object;
}

/**
 * 文字 字体、大小、行高
 * @param props
 */
const Image: React.ForwardRefRenderFunction<HTMLImageElement, ImageProps> = (props, ref) => {
  return <img {...props} ref={ref} />;
};

const RefImage = React.forwardRef(Image);

RefImage.defaultProps = {
  src: 'https://img.alicdn.com/tps/TB16TQvOXXXXXbiaFXXXXXXXXXX-120-120.svg',
};

export default RefImage;
