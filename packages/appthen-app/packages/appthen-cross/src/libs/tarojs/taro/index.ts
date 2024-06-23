import { downloadFile, uploadFile } from './api/fileTransfer';
import { chooseImage, getImageInfo, previewImage } from './api/image';
import { chooseVideo, createVideoContext } from './api/video';

import { createAnimation } from './createAnimation';
import { createSelectorQuery } from './createSelectorQuery';

export { downloadFile, uploadFile } from './api/fileTransfer';
export { chooseImage, getImageInfo, previewImage } from './api/image';
export { chooseVideo, createVideoContext } from './api/video';

export { createAnimation } from './createAnimation';
export { createSelectorQuery } from './createSelectorQuery';

export const ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  QUICKAPP: 'QUICKAPP',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD',
};

// 一个taro项目肯定运行同样的环境
export function getEnv() {
  return ENV_TYPE.WEB;
}

export const getCurrentPages = () => {
  return [1, 2, 3];
};

export const useDidHide = (val: any) => {};
export const useDidShow = (cb) => {
  setTimeout(cb, 100);
};
export const hideLoading = (val: any) => {};
export const navigateTo = (val: any) => {};
export const pxTransform = (num: number, width: number) => num / 2 + 'px';
export const request = (options: any) => {};

export default {
  ENV_TYPE,
  getEnv,
  createAnimation,
  createSelectorQuery,
  navigateTo,
  getCurrentPages,
  downloadFile,
  uploadFile,
  getImageInfo,
  chooseImage,
  previewImage,
  chooseVideo,
  createVideoContext,
  pxTransform,
  hideLoading,
  request,
  useDidHide,
  useDidShow,
};
