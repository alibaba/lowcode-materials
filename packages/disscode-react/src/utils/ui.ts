import Taro from '@tarojs/taro';

export { addPortal, registerPartalComponent, showComponentModal, renderComponentPortal, renderComponent, getComponent } from '../';

export const px = function (num: number) {
  if ((window as any).__client == 'web') return (num / 2) + 'px';
  return Taro.pxTransform(num, 750);
};
