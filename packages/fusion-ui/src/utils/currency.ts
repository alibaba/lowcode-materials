// 除下列特殊币种外，小数点后面一致保留两位,小数点前用,进行千分位。当前特殊货币规范取自ISO 4217 1 January 2019版本
import numvert from 'numvert';

const currencyMap = {
  BHD: {
    e: 3,
  },
  BIF: {
    e: 0,
  },
  CLF: {
    e: 4,
  },
  CLP: {
    e: 0,
  },
  DJF: {
    e: 0,
  },
  GNF: {
    e: 0,
  },
  IQD: {
    e: 3,
  },
  ISK: {
    e: 0,
  },
  JOD: {
    e: 3,
  },
  JPY: {
    e: 0,
  },
  KMF: {
    e: 0,
  },
  KRW: {
    e: 0,
  },
  KWD: {
    e: 3,
  },
  LYD: {
    e: 3,
  },
  OMR: {
    e: 3,
  },
  PYG: {
    e: 0,
  },
  RWF: {
    e: 0,
  },
  TND: {
    e: 3,
  },
  UGX: {
    e: 0,
  },
  UYI: {
    e: 0,
  },
  UYW: {
    e: 4,
  },
  VUV: {
    e: 0,
  },
  XAF: {
    e: 0,
  },
  XOF: {
    e: 0,
  },
  XPF: {
    e: 0,
  },
  // 财务特殊处理
  IDR: {
    e: 0,
  },
  TWD: {
    e: 0,
  },
  VND: {
    e: 0,
  },
};
const CurrencyFormat = {
  getFormatDetails(p) {
    const { currency = 'CNY', precision = '' } = p;
    if (!`${precision}`) {
      // 不存在 precision 的情况下使用 currency
      if (currencyMap[currency]) {
        p.precision = currencyMap[currency].e;
      } else {
        p.precision = 2;
      }
    }
    p.currency = currency;
    return p;
  },

  getFormatter(n, fd) {
    if (isNaN(n) || !`${n}`) {
      return '';
    }
    const { precision } = fd;
    const baseRule = '0,0';
    let precisionRule = '';
    if (precision > 0) {
      for (let i = 0; i < precision; i++) {
        precisionRule += '0';
      }
    }
    const finalRule = precisionRule ? `${baseRule}.${precisionRule}` : baseRule;
    const formatedData = numvert(n).format(finalRule);
    return formatedData;
  },
  /**
   *
   * @param {*} value
   * @param {*} currency [currency = CNY]货币种类,支持ISO_4217的code规范
   * @param {*} config   [precision='']保留小数位数
   */
  formatAmount(value, currency = 'CNY', config = {}) {
    config.currency = currency;
    const formatDetail = this.getFormatDetails(config);
    return this.getFormatter(value, formatDetail);
  },
};

export const formatAmount = CurrencyFormat.formatAmount.bind(CurrencyFormat);
export const currencyMapData = currencyMap;
