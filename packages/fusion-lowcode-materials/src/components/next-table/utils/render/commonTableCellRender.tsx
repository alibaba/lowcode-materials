import defaultRender from "./defaultRender";
import timestampRender from "./timestampRender";
import cascadeTimestampRender from "./cascadeTimestampRender";
import moneyRender from "./moneyRender";
import moneyRangeRender from "./moneyRangeRender";
import linkRender from './linkRender'
import fileRender from './fileRender'
import enumRender from './enumRender'
import imageRender from './imageRender'

export default function commonTableCellRender(value: any, index: number, rowData: any, column: any) {
  const { dataType } = column;

  if (dataType === 'text') {
    return defaultRender(value);
  }

  if (dataType === 'link') {
    return linkRender(value, column, rowData)
  }

  if (dataType === 'file') {
    return fileRender(value)
  }
  if (dataType === 'image') {
    return imageRender(value, column, rowData)
  }

  if (dataType === 'enum') {
    return enumRender(value, column)
  }

  if (dataType === 'timestamp') {
    return timestampRender(value, column);
  }

  if (dataType === 'cascadeTimestamp') {
    return cascadeTimestampRender(value, column);
  }

  if (dataType === 'money') {
    return moneyRender(value);
  }

  if (dataType === 'moneyRange') {
    return moneyRangeRender(value);
  }

  const { render } = column;
  if (render) {
    try {
      return render(value, index, rowData);
    } catch (e) {
      if (e instanceof Error) {
        console.warn(e.stack);
      }
      return defaultRender(value);
    }

  } else {
    return defaultRender(value);
  }
}
