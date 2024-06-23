import React from 'react';
import { observable } from 'mobx';
import { CrossPageNavigation } from '../Layout/Page.PropType';
import { findNodeHandle, Animated, UIManager, StyleSheet, Platform } from 'react-native';

import View from '../View';

import { ModalProps } from './Modal.PropType';
import KeyboardSpace from '../../../utils/overlay/KeyboardSpace';

let globalZIndex = 1000;

class Modal<C extends React.Component> extends React.Component<ModalProps<C>, any> {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.animationRoot = new Animated.Value(0);
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.styleRn = StyleSheet.create({
      position: {},
      other: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
      },
    });
  }

  state = {
    animationRoot: null,
    styleRn: null,
    visible: false,
  };

  componentDidMount() {
    // this.init()
  }

  init = () => {
    const { animate = 'slide-bottom' } = this.props;
    const position: Record<string, number> = {};
    // RN端动画
    setTimeout(() => {
      const handle = findNodeHandle(this.anRef);
      // 防止渲染延迟
      if (!handle || !this.anRef) return this.init();
      UIManager.measureInWindow(handle, (x, y, width, height) => {
        const { animationRoot } = this.state;
        switch (animate) {
          case 'slide-left':
            position.top = 0;
            position.bottom = 0;
            break;
          case 'slide-right':
            position.top = 0;
            position.bottom = 0;
            break;
          case 'slide-top':
            position.left = 0;
            position.right = 0;
            break;
          case 'slide-bottom':
            position.left = 0;
            position.right = 0;
            break;
        }

        this.setState({
          styleRn: StyleSheet.create({
            position,
          }),
        });

        Animated.timing(this.state.animationRoot, {
          toValue: 1,
          duration: this.animatedTime,
          useNativeDriver: false,
        }).start();
        console.log('动画执行');
      });
    }, 300);
  };

  // 动画时间
  animatedTime = 150;

  @observable childrenProps: C['props'] = {};
  @observable visible = false;

  navigation: CrossPageNavigation = {
    goBack: () => {
      this.close();
    },
    navigate: (pageName, params) => {},
    redirect: (pageName, params) => {},
  };

  // componentDidMount(): void {
  //   if ((this.props as any).__designMode === 'design') {
  //     // 低代码编辑态中强制显示，将控制权交给引擎侧
  //     this.visible = true;
  //   }
  // }

  open = (childrenProps: C['props'] = {}) => {
    globalZIndex++;
    this.childrenProps = {
      isModal: true,
      navigation: this.navigation,
      ...childrenProps,
    };
    this.setState(
      {
        visible: true,
        zIndex: globalZIndex,
      },
      () => {
        this.init();
      },
    );
  };

  close = () => {
    globalZIndex--;
    const { animationRoot } = this.state;
    Animated.timing(animationRoot, {
      toValue: 0,
      duration: this.animatedTime,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      this.props.onClose && this.props.onClose();
      this.setState({
        visible: false,
      });
    }, this.animatedTime);
  };

  // close = () => {
  //   this.visible = false;
  //   // this.props?.onClose?.();
  // };

  anRef?: any;

  render() {
    const { animationRoot, zIndex, styleRn } = this.state as any;
    const { animate = 'slide-bottom', renderView, style, width, height, maskClosable = true, overlayOpacity = 0.5 } = this.props;
    const side = animate.split('-')[1];
    const visible = this.state.visible || (this.props as any).__designMode;
    if (!visible) return null;
    return (
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: visible ? undefined : 'none', zIndex }}>
        <Animated.View
          className='rq-modal'
          style={{
            backgroundColor: animationRoot?.interpolate({
              inputRange: [0, 1],
              outputRange: ['rgba(0, 0, 0, 0)', `rgba(0, 0, 0, ${overlayOpacity})`],
            }),
          }}
        >
          <View onClick={this.close} className='rq-modal__other' />
        </Animated.View>
        <Animated.View
          className='rq-modal__main'
          ref={(ref) => (this.anRef = ref)}
          style={{
            ...styleRn?.position,
            height: style?.height,
            ...(animate === 'pop'
              ? {
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              : {}),
            ...{
              opacity: animationRoot?.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              [side]: animationRoot?.interpolate({
                inputRange: [0, 1],
                outputRange: [-200, 0],
              }),
            },
          }}
        >
          {/* {Taro.getEnv() === Taro.ENV_TYPE.RN && isIos() ? (
            <KeyboardAvoidingView style={{ flex: 1 }} >
              {renderView && visible ? renderView(this.childrenProps) : null}
            </KeyboardAvoidingView>
          ) : renderView && visible ? (
            renderView(this.childrenProps)
          ) : null} */}
          {/* {animate === 'pop' ? (
            <View className='M-center-all M-flex-item'> */}
          {/* 临时解决居中定位弹窗的点击蒙层关闭问题 */}
          {animate === 'pop' && maskClosable ? (
            <View
              style={{
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={this.close}
            >
              {renderView && visible ? renderView(this.childrenProps) : null}
              {Platform.OS === 'ios' && <KeyboardSpace />}
            </View>
          ) : (
            <React.Fragment>
              {renderView && visible ? renderView(this.childrenProps) : null}
              {Platform.OS === 'ios' && <KeyboardSpace />}
            </React.Fragment>
          )}

          {/* </View>
          ) : (
            <React.Fragment>
              {renderView && visible ? renderView(this.childrenProps) : null}
              {Platform.OS === 'ios' && <KeyboardSpace />}
            </React.Fragment>
          )} */}
        </Animated.View>
      </View>
    );
  }
}

export default Modal;
