import Taro from '@tarojs/taro';
export { addPortal, registerPartalComponent, showComponentModal, renderComponentPortal, renderComponent } from '../';
export const px = function (num) {
    if (window.__client == 'web')
        return (num / 2) + 'px';
    return Taro.pxTransform(num, 750);
};
export const $prewView = function (url, urls) {
    // console.log('[$prewView] ', url, urls)
    Taro.previewImage({
        current: url,
        urls: urls || [url],
    });
};
export const $toast = function (text, icon = 'none', duration = 1500) {
    Taro.showToast({
        title: text,
        icon,
        duration,
    });
};
export const $actionSheet = function (buttons) {
    return new Promise((resolve, reject) => {
        Taro.showActionSheet({
            itemList: buttons,
            success: function (res) {
                resolve(res.tapIndex);
            },
            fail: function (res) {
                reject();
            },
        });
    });
};
export const $message = {
    success: $toast,
    error: $toast,
    info: $toast,
};
export const $confirm = function (content, title = '提示', { confirmButtonText = '确定', confirmText = '', cancelText = '' } = {}) {
    return new Promise((resolve, reject) => {
        Taro.showModal({
            title,
            content,
            confirmText: confirmButtonText,
            confirmColor: '#658efe',
            success: (res) => {
                if (res.confirm) {
                    resolve();
                }
                else if (res.cancel) {
                    reject();
                }
            },
        });
    });
};
export const $alert = function (content, title) {
    Taro.showModal({
        title: title || '提示',
        content,
        showCancel: false,
        confirmText: '知道了',
        confirmColor: '#658efe',
    });
};
//# sourceMappingURL=ui.js.map