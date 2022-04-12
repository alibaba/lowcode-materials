import React from 'react';
import { ConfigProvider as OriginalConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

const ConfigProvider = (props: any) => {
  const { locale, ...rest } = props;

  let localeData = locale;
  if (typeof locale === 'string') {
    if (locale.toLowerCase() === 'zh-cn') {
      moment.locale('zh-cn');
      localeData = zhCN;
    } else if (locale.toLowerCase() === 'en-us') {
      moment.locale('en');
      // 默认为英文
      localeData = undefined;
    }
  }

  return <OriginalConfigProvider locale={localeData} {...rest} />;
};

export default ConfigProvider;
