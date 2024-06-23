import Taro from '@tarojs/taro';
// @ts-ignore
import * as FileSystem from 'expo-file-system';

class FileSystemManager {
  async readFile(option: Taro.FileSystemManager.ReadFileOption) {
    if (option.encoding === 'base64') {
      const fileContent = await FileSystem.readAsStringAsync(option.filePath, { encoding: FileSystem.EncodingType.Base64 });
      option.success?.({
        errMsg: '',
        data: fileContent
      })
    } else {
      option.fail?.({
        errMsg: '暂时RN端只支持base64，请联系客服火速跟进',
      })
    }
  }
  async copyFile(option: Taro.FileSystemManager.CopyFileOption) {
    try {
      await FileSystem.copyAsync({
        from: option.srcPath,
        to: option.destPath,
      });
      // 调用成功回调函数
      option?.success?.({
        errMsg: '',
      });
    } catch (error) {
      // 调用失败回调函数
      option.fail?.({
        errMsg: String(error),
      })
    }
  }
}

export const getFileSystemManager = function() {
  return new FileSystemManager();
}