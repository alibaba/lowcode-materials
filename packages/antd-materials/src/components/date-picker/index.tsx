import { DatePicker as OriginalDatePicker } from 'antd';
import { withMomentProps } from '../../utils/hoc';

const OriginalRangePicker = OriginalDatePicker.RangePicker;

const DatePicker = withMomentProps(OriginalDatePicker, [
  'defaultPickerValue',
  'defaultValue',
  'showTime.defaultValue',
  'value',
]);

const RangePicker = withMomentProps(OriginalRangePicker, [
  'defaultPickerValue',
  'defaultValue',
  'showTime.defaultValue',
  'value',
]);

(DatePicker as any).RangePicker = RangePicker;

export default DatePicker;
