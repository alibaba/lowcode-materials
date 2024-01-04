import { downloadFile, uploadFile } from './api/fileTransfer';
import { chooseImage, getImageInfo, previewImage } from './api/image';
import { chooseVideo, createVideoContext } from './api/video';

import { createAnimation } from './createAnimation';
import { createSelectorQuery } from './createSelectorQuery';

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

const getCurrentPages = () => {
  return [1, 2, 3];
};

export default {
  ENV_TYPE,
  getEnv,
  createAnimation,
  createSelectorQuery,
  navigateTo: (val: any) => {},
  getCurrentPages,
  downloadFile,
  uploadFile,
  getImageInfo,
  chooseImage,
  previewImage,
  chooseVideo,
  createVideoContext,
  pxTransform: (num: number, width: number) => (num / 2) + 'px',
  hideLoading: () => {},
  request: (options: any) => {},
};
