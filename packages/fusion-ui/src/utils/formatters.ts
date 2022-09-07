import { formatAmount } from '@/utils/currency';
import numvert from 'numvert';
import is from '@sindresorhus/is';
import dayjs from 'dayjs';

/** 金额格式化 */
export const formatMoney = (
  /** 值, 金额 */
  value: string | number,
  /** 币种 */
  currency?: string,
) => {
  if (is.nullOrUndefined(value)) {
    return undefined;
  }
  return currency ? `${formatAmount(value, currency)} ${currency}` : formatAmount(value);
};

export const formatNumber = (
  /** 值 */
  value?: string | number,
  /** 格式, numvert支持的所有格式 */
  format?: string,
) => {
  if (is.nullOrUndefined(value)) {
    return undefined;
  }
  return format ? numvert(value).format(format) : value;
};

export const formatPercent = (
  /** 值 */
  value?: string | number,
  /** 格式, numvert支持的所有格式 */
  format?: string,
) => formatNumber(value, format || '0%');

export const formatBankCard = (
  /** 值 */
  value?: string | number,
) => {
  if (is.nullOrUndefined(value)) {
    return undefined;
  }
  return `${value}`.replace(/(\d{4})(?=\d)/g, '$1 ');
};

const presetDateTemplates = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  time: 'HH:mm:ss',
};

/**
 * 时间格式化
 * @param value 值, 时间
 * @param template 格式, dayjs 支持的所有格式
 */
export const formatDate = (value?: string | number, template = 'date') => {
  if (is.nullOrUndefined(value)) {
    return undefined;
  }
  return dayjs(value).format(presetDateTemplates[template] || template);
};
