import React from 'react';
import { ConfigProvider as OriginalConfigProvider, theme as AntdTheme } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';

const ConfigProvider = (props: any) => {
  const { locale, theme,  ...rest } = props;

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

  return <OriginalConfigProvider locale={localeData} theme={{
    ...theme,
    algorithm: theme.algorithm === 'dark' ? AntdTheme.darkAlgorithm : AntdTheme.compactAlgorithm,
  }} {...rest} />;
};

export default ConfigProvider;
