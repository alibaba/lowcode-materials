import { TimePicker as OriginalTimePicker } from 'antd';
import { withMomentProps } from '../../utils/hoc';

const TimePicker = withMomentProps(OriginalTimePicker, [
  'defaultValue',
  'value',
]);

export default TimePicker;
