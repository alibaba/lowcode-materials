import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { CrossPageNavigation } from '../Layout/Page.PropType';

import View from '../View';

import { ModalProps } from './Modal.PropType';

let index = 1000;

@observer
class Modal<C extends React.Component> extends React.Component<ModalProps<C>> {
  @observable childrenProps: C['props'] = {};
  @observable visible = false;

  navigation: CrossPageNavigation = {
    goBack: () => {
      this.close();
    },
    navigate: (_pageName, _params) => {},
    redirect: (_pageName, _params) => {},
  };

  componentDidMount(): void {
    if ((this.props as any).__designMode === 'design') {
      // 低代码编辑态中强制显示，将控制权交给引擎侧
      this.visible = true;
    }
  }

  @observable zIndex = {
    base: 1000,
    mask: 1001,
    body: 1002,
  };

  open = (childrenProps: C['props'] = {}) => {
    index++;
    const base = this.props.zIndex || index;
    this.zIndex = {
      base,
      mask: base + 1,
      body: base + 2
    };
    this.childrenProps = {
      isModal: true,
      navigation: this.navigation,
      ...childrenProps,
    };
    setTimeout(() => {
      this.visible = true;
      this.forceUpdate();
    }, 10);
  };

  close = () => {
    index--;
    if ((this.props as any).__designMode) return;
    this.visible = false;
    this.props?.onClose?.();
    this.forceUpdate();
  };

  render() {
    let {
      animate = 'slide-bottom',
      renderView,
      width,
      height,
      style,
      maskClosable = true,
    } = this.props;
    const { zIndex } = this;
    const animateClassName = 'cs-dialog--' + animate;
    const visible = this.visible || (this.props as any).__designMode;
    return (
      <View
        className={`cs-dialog ${animateClassName} ${visible ? 'cs-dialog--show' : ''}`}
        style={{ zIndex: zIndex.base }}
      >
        <View
          className="cs-dialog__mask"
          onClick={maskClosable && this.close.bind(this)}
          style={{ zIndex: zIndex.mask }}
        />
        <View
          className="cs-dialog__container M-flexbox-vertical"
          style={{
            width: style?.width || width,
            height: style?.height || height,
            zIndex: zIndex.body,
          }}
        >
          {renderView && visible ? renderView(this.childrenProps) : null}
        </View>
      </View>
    );
  }
}

export default Modal;
