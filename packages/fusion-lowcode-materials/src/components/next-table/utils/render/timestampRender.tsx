import errorRender from './errorRender';
import defaultRender from './defaultRender';
import Formatter from '../formatter';

export default function timestampRender(cellData: string, item: { timeFormatter?: string }) {
  if (!cellData) {
    return '';
  }

  if (isNaN(Number(cellData))) {
    return errorRender();
  }

  const { timeFormatter } = item;
  const result = Formatter.date(cellData, timeFormatter);
  return defaultRender(result);
}