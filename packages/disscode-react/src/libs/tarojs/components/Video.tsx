import React from 'react';
import { VideoProps } from './types/Video';
import Omit from 'omit.js';
// import Hls from 'hls.js';
// window.Hls = Hls;
// import DPlayer from 'dplayer';

interface IProps extends VideoProps {
  style?: React.CSSProperties;
}

class Video extends React.Component<IProps> {
  componentDidMount() {
    const { src } = this.props;
  }
  componentWillUnmount() {
    this.dp && this.dp.destroy();
  }

  dp: any;
  videoRef: React.ReactNode;

  render() {
    let { className, src, style, poster, controls, autoplay, loop, muted } = this.props;
    return (
      <video
        ref={(node) => (this.videoRef = node)}
        src={src}
        poster={poster}
        className={`${className}`}
        style={style}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        // {...Omit(this.props, ['onError', 'onEnded', 'onPause', 'onPlay', 'onProgress', 'onTimeUpdate', 'onWaiting'])}
      ></video>
    );
  }
}

export default Video;
