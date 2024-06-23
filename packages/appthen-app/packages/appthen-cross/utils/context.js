import Taro from '@tarojs/taro';
import React from 'react';
export const PageContext = React.createContext({
    _id: '',
    Runtime: Taro.ENV_TYPE.RN,
    PageProps: {},
});
//# sourceMappingURL=context.js.map