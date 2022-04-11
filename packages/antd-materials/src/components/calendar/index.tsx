import { Calendar as OriginalCalendar } from 'antd';
import { withMomentProps } from '../../utils/hoc';

const Calendar = withMomentProps(OriginalCalendar, [
  'defaultValue',
  'validRange',
  'value.defaultValue',
]);

export default Calendar;
