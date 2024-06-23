import React from 'react';
import View from '../View';
import { ImageBackground } from '../ImageBackground';
import StatusBar from '../Bar/StatusBar';
import KeyboardAvoidingView, { isIos } from './KeyboardAvoidingView';
import AutoPortal from '../../root-portal/auto-portal';
import Taro from '@tarojs/taro';

import { PageContext } from '../../../utils/context';

import { CrossPageProps } from './Page.PropType';
import { Block } from '@tarojs/components';

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
    const {
      className = '',
      style,
      backgroundImage,
      children,
      absolute,
      statusBarMode,
    } = this.props;
    let runtimeClass = 'cross-page__native M-flex-item';
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
      runtimeClass = 'cross-page__wxapp M-flexbox-vertical';
    }
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      runtimeClass = `cross-page__web M-flexbox-vertical M-height-fill ${
        absolute ? 'cross-page__absolute' : ''
      }`;
    }
    return (
      <PageContext.Provider
        value={{
          _id: this._id,
          Runtime: Taro.getEnv(),
          PageProps: this.props,
        }}
      >
        {!!statusBarMode && <StatusBar mode={statusBarMode} />}
        {backgroundImage ? (
          <ImageBackground
            className={`
              cross-page ${runtimeClass} ${className}
            `}
            style={{ ...style, backgroundSize: '100% auto', backgroundPosition: '0 0' }}
            src={backgroundImage}
          >
            {Taro.getEnv() === Taro.ENV_TYPE.RN && isIos() ? (
              <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                {children}
              </KeyboardAvoidingView>
            ) : (
              children
            )}
            <Block>
              <AutoPortal key='no' />
            </Block>
          </ImageBackground>
        ) : (
          <View
            className={`
              cross-page ${runtimeClass} ${className}
            `}
            style={style}
          >
            {Taro.getEnv() === Taro.ENV_TYPE.RN && isIos() ? (
              <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                {children}
              </KeyboardAvoidingView>
            ) : (
              children
            )}
            <Block>
              <AutoPortal key='no' />
            </Block>
          </View>
        )}
      </PageContext.Provider>
    );
  }
}

export default Page;
