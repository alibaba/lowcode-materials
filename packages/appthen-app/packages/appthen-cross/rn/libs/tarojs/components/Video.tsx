import React from 'react';
import { VideoProps } from './types/Video';
// import Hls from 'hls.js';
// window.Hls = Hls;
// import DPlayer from 'dplayer';

interface IProps extends VideoProps {
  style?: React.CSSProperties;
}

class Video extends React.Component<IProps> {
  componentDidMount() {
    const { src } = this.props;
    console.log('[src] ', src);
    // this.dp = new DPlayer({
    //   container: this.videoRef,
    //   video: {
    //     url: src,
    //     // type: 'hls',
    //   },
    //   pluginOptions: {
    //     hls: {},
    //   },
    // });
  }
  componentWillUnmount() {
    this.dp && this.dp.destroy();
  }

  dp: any;
  videoRef: React.ReactNode;

  play = () => {
    const { src } = this.props;
    window.open(src, '_blank');
  };

  render() {
    let { className, style, poster } = this.props;
    return (
      <div
        ref={(node) => (this.videoRef = node)}
        className={`${className} M-image-background`}
        style={{
          width: style?.width ? style?.width : '100%',
          height: style?.height ? style?.height : '100%',
          backgroundImage: poster ? 'url(' + poster + ')' : '',
        }}
      >
        {/* <div className='M-center-all' style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <img onClick={this.play} style={{ width: px(100) }} src={require('./images/play.png')} />
        </div> */}
      </div>
    );
  }
}

export default Video;
