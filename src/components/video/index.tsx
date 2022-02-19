import * as React from 'react';

export interface Props {
  src?: string;
  autoPlay?: boolean; //自动播放必须设置 muted=true
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  style?: object;
}

/**
 * 视频
 */
const Video: React.ForwardRefRenderFunction<HTMLVideoElement, Props> = (props, ref) => {
  return <video {...props} ref={ref}></video>;
};

const RefVideo = React.forwardRef<HTMLVideoElement, Props>(Video);

RefVideo.defaultProps = {
  src: 'https://fusion.alicdn.com/fusion-site-2.0/fusion.mp4',
};

export default RefVideo;
