import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import Player from 'xgplayer';
// import './.xgplayer/skin/index.js';
// import volume from 'xgplayer/dist/controls/volume';
// import playbackRate from 'xgplayer/dist/controls/playbackRate';

interface XgplayertProps {
  url?:string;
  saveField?(Player: any): void;
}

const XgplayertComponent = (props: XgplayertProps, ref: any) => {
  const {  url,saveField, ...others } = props;

  React.useEffect(() => {
    const player = new Player({
      ...others,
      id: 'appthen_player',
      url: url,
    });
  


    if (saveField) {
      saveField(player);
    }

    return () => {
      // 组件卸载时销毁播放器
      player.destroy();
    };
  }, [url]);


  return (
    <div ref={ref} id='appthen_player' >
    </div>
  );
};

const RefExampleComponent = forwardRef(XgplayertComponent as ForwardRefRenderFunction<any, XgplayertProps>);
RefExampleComponent.displayName = 'XgplayertComponent';

export default RefExampleComponent;
