export { create as dataSource } from '@alilc/lowcode-datasource-engine/runtime';
// export const dataSource = lceDataSource.create;

import Taro from '@tarojs/taro';
const {
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
  request
} = Taro;
export {
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
  request
};
export * from './storage';
export * from './ui';
export * from './event';
export * from './data';
export * from './loadsh';
export * from './time';
export * from './navigation';
export * from './safeValue';
