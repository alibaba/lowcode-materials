import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Player } from '@galacean/effects';


interface ComponentProps {
  title: string;
  show: string;
}

const ExampleComponent = (props: ComponentProps, ref: any) => {
  const { title, show, ...others } = props;

  // const containerRef = React.useRef<HTMLDivElement | null>(null);
  const playerRef = React.useRef<Player | null>(null);
  React.useEffect(function () {
    if (!playerRef.current) {
      // 实例化一个 Galacean Effects 播放器
      const player = new Player({
        container:ref,
      });

      // 加载动画资源并播放
      player
        .loadScene("https://mdn.alipayobjects.com/mars/afts/file/A*c5XgQ4jW1YEAAAAAAAAAAAAADlB4A")
        .catch(err => {
          // 降级逻辑
          console.error(err);
        });
    }
    
    return function () {
      playerRef.current?.dispose();
      playerRef.current = null;
    }
  }, [props.show]);
  return props.show && <div className="container" style={{width:'100vw',height:'100vh'}} ref={ref}></div>

};

const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
