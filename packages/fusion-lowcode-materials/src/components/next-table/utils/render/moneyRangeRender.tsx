import errorRender from './errorRender';
import defaultRender from './defaultRender';
import Formatter from '../formatter';

export default function moneyRangeRender(cellData: {
  lower?: string;
  upper?: string;
  currency?: string;
}) {
  if (!cellData) {
    return '';
  }

  if (Object.prototype.toString.call(cellData) === '[object Object]') {
    if (!cellData.hasOwnProperty('lower') || !cellData.hasOwnProperty('upper')) {
      return errorRender();
    }

    let lower;
    let upper;
    try {
      lower = Formatter.money(cellData.lower || '0', ',', 2);
      upper = Formatter.money(cellData.upper || '0', ',', 2);
    } catch (e) {
      return errorRender();
    }

    return defaultRender(`${lower} ${cellData.currency || ''} ~ ${upper} ${cellData.currency || ''}`);
  }
  return errorRender();
};

