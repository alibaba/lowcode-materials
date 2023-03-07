import errorRender from './errorRender';
import defaultRender from './defaultRender';
import Formatter from '../formatter';

export default function cascadeTimestampRender(cellData: any, item: { timeFormatter?: string }) {
  if (!cellData) {
    return '';
  }

  const { timeFormatter } = item;
  if (Object.prototype.toString.call(cellData) === '[object Object]') {
    if (!cellData.hasOwnProperty('start') && !cellData.hasOwnProperty('end')) {
      return errorRender();
    }
    const start = Formatter.date(cellData.start, timeFormatter);
    const end = Formatter.date(cellData.end, timeFormatter);
    return defaultRender(`${start} ~ ${end}`);
  }
  return errorRender();
};

