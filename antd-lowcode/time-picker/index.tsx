import { TimePicker as OriginalTimePicker } from 'antd';
import { withMomentProps } from '../_utils/hoc';

const TimePicker = withMomentProps(OriginalTimePicker, [
  'defaultValue',
  'value',
]);

export default TimePicker;
