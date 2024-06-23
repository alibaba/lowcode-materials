import Taro from '@tarojs/taro'

export { addPortal, registerPartalComponent, showComponentModal, renderComponentPortal, renderComponent } from '..';

export const px = function(num: number) {
  if ((window as any).__client == 'web') return (num / 2) + 'px';
  return Taro.pxTransform(num, 750);
}

export const $prewView = function(url, urls) {
  // console.log('[$prewView] ', url, urls)
  Taro.previewImage({
    current: url, // 当前显示图片的http链接
    urls: urls || [url] // 需要预览的图片http链接列表
  })
}

export const $toast = function(text: string, icon: string = 'none', duration: number = 1500) {
  Taro.showToast({
    title: text,
    icon,
    duration
  })
}

export const $actionSheet = function(buttons: string[]) {
  return new Promise<number>((resolve, reject) => {
    Taro.showActionSheet({
      itemList: buttons,
      success: function (res: any) {
        resolve(res.tapIndex)
      },
      fail: function (res) {
        reject()
      }
    })
  })
}

export const $message = {
  success: $toast,
  error: $toast,
  info: $toast,
};

export const $confirm = function(content, title = '提示', {
  confirmButtonText = '确定',
  cancelButtonText = '取消',
} = {}) {
  return new Promise((resolve, reject) => {
    Taro.showModal({
      title,
      content,
      confirmText: confirmButtonText,
      confirmColor: '#658efe',
      cancelText: cancelButtonText,
      success: (res) => {
        if (res.confirm) {
          resolve()
        } else if (res.cancel) {
          reject()
        }
      }
    })
  })
}

export const $alert = function(content: string, title?: string) {
  Taro.showModal({
    title: title || '提示',
    content,
    showCancel: false,
    confirmText: '知道了',
    confirmColor: '#658efe'
  })
}