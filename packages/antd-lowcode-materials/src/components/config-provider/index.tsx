import React from 'react';
import { ConfigProvider as OriginalConfigProvider, theme as AntdTheme } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import weekday from "dayjs/plugin/weekday"
import localeDataPlug from "dayjs/plugin/localeData"
import zhCN from 'antd/es/locale/zh_CN';

dayjs.extend(weekday)
dayjs.extend(localeDataPlug)

const ConfigProvider = (props: any) => {
  const { locale, theme, ...rest } = props;
  let localeData = locale;
  if (typeof locale === 'string') {
    if (['zh-cn', 'zh_cn'].includes(locale.toLowerCase())) {
      dayjs.locale('zh-cn');
      localeData = zhCN;
    } else if (['en-us', 'en_us'].includes(locale.toLowerCase())) {
      dayjs.locale('en');
      // 默认为英文
      localeData = undefined;
    }
  }

  return (
    <OriginalConfigProvider
      locale={localeData}
      theme={{
        ...theme,
        algorithm:
          theme.algorithm === 'dark' ? AntdTheme.darkAlgorithm : AntdTheme.compactAlgorithm,
      }}
      {...rest}
    />
  );
};

export default ConfigProvider;
