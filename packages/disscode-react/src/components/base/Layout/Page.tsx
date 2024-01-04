import React from 'react';
import View from '../View';
import { ImageBackground } from '../ImageBackground';

import { PageContext } from '../../../utils/context';

import { CrossPageProps } from './Page.PropType';
import AutoPortal from '../../root-portal/auto-portal';

interface IProps extends CrossPageProps {
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: string;
  keyboard?: boolean;
  children: React.ReactNode;
  absolute?: boolean;
  statusBarMode?: 'light' | 'dark';
}

let page_id = 1;
class Page extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this._id = 'PAGE_' + page_id++;
  }

  static diaplayName = 'Page';

  _id = '';

  render() {
    const { className = '', style, backgroundImage, children, absolute } = this.props;
    // let runtimeClass = 'cross-page__web';
    // if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
    //   runtimeClass = `cross-page__web M-flexbox-vertical M-height-fill ${absolute ? 'cross-page__absolute' : ''}`;
    // }
    console.log('isRootNode: ', 111);
    return (
      <PageContext.Provider
        value={{
          _id: this._id,
        }}
      >
        {backgroundImage ? (
          <ImageBackground
            className={`
            cross-page ${className}
          `}
            style={{ ...style, backgroundSize: '100% auto', backgroundPosition: '0 0' }}
            src={backgroundImage}
          >
            {children}
            <AutoPortal />
          </ImageBackground>
        ) : (
          <View
            className={`
            cross-page ${className}
          `}
            style={style}
          >
            {children}
            <AutoPortal />
          </View>
        )}
      </PageContext.Provider>
    );
  }
}

export default Page;
