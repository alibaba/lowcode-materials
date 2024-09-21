import { Calendar as OriginalCalendar } from 'antd';
import { withMomentProps } from '../../utils/hoc';

const InitCalendar = withMomentProps(OriginalCalendar, [
  'defaultValue',
  'validRange',
  'value.defaultValue',
]);

const Calendar = (props: any) => {
  return (
    <InitCalendar
      {...props}
      mode={props.showMode ? props.mode : undefined}
      onPanelChange={props?.onPanelChange}
    ></InitCalendar>
  );
};

export default Calendar;
