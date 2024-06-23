import React from 'react';
import { View } from '@tarojs/components';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import moment from 'dayjs';

LocaleConfig.locales['zh'] = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],
  monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  today: "今天"
};
LocaleConfig.defaultLocale = 'zh';

import { AtCalendarDefaultProps, AtCalendarProps, AtCalendarState } from '../../../types/calendar';
import { pxTransform } from '@tarojs/taro';

const defaultProps: AtCalendarDefaultProps = {
  validDates: [],
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月',
};

function getDaysArray(start, end) {
  console.log('[getDaysArray] ', start, end);
  const days: string[] = [];
  let curr = moment(start).startOf('day');
  let last = moment(end).startOf('day');
  while (curr.diff(last) < 0) {
    days.push(curr.format('YYYY-MM-DD'));
    curr = curr.add(1, 'day');
    last = moment(end).startOf('day');
  }
  return days;
}

interface IState {

}

export default class AtCalendar extends React.Component<
  AtCalendarProps, 
  IState
> {
  static defaultProps: AtCalendarDefaultProps = defaultProps;

  public componentDidMount(): void {}

  state = {
    selectedDate: '',
  }

  transformDate(value?: AtCalendarDefaultProps['currentDate']) {
    return typeof value === 'number' ? moment(value).format(this.props.format || 'YYYY-MM-DD') : typeof value === 'string' ? value : undefined;
  }
  
  transformFormat(format?: string) {
    return format?.replace('YYYY', 'yyyy')?.replace('DD', 'dd');
  }

  getMarks = (currentDate, marks) => {
    const { isMultiSelect } = this.props;
    let _marks: Record<string, any> = {};
    if (isMultiSelect) console.log('[currentDate] ', currentDate);
    // 范围
    if (isMultiSelect) {
      if (currentDate?.start) {
        _marks[this.transformDate(currentDate?.start) || ''] = {startingDay: true, color: '#70d7c7', textColor: 'white'};
      }
      if (currentDate?.end) {
        _marks[this.transformDate(currentDate?.end) || ''] = {endingDay: true, color: '#70d7c7', textColor: 'white'};
      }
      if (currentDate?.start && currentDate?.end) {
        const days = getDaysArray(currentDate?.start, currentDate?.end).concat([this.transformDate(currentDate?.end) || '']);
        if (days?.length > 0) {
          days.forEach(_ => {
            _marks[_] = {
                startingDay: this.transformDate(currentDate?.start) === _,
                endingDay: this.transformDate(currentDate?.end) === _,
              color: '#70d7c7', textColor: 'white'
            }
          })
        }
      }
    } else {
      (marks?.length > 0 ? marks : (currentDate ? [{ value: this.transformDate(currentDate)}] : [])).forEach(_ => {
        _marks[_.value] = {
          selected: true,
          disableTouchEvent: false,
          selectedColor: '#70d7c7',
          selectedTextColor: 'white',
        }
      })
    }
    return _marks;
  }

  public render(): JSX.Element {
    const { currentDate, isMultiSelect, format, marks, calendarWidth, isSwiper, minDate, maxDate, onDayClick, onDayLongClick, onMonthChange } = this.props;
    const current = isMultiSelect ? undefined : this.transformDate(currentDate);
    return (
      <CalendarList
        // @ts-ignore
        style={this.props.style}
        current={current}
        markingType={isMultiSelect ? 'period' : undefined}
        markedDates={this.getMarks(currentDate, marks)}
        monthFormat={this.transformFormat(format)}
        minDate={this.transformDate(minDate)}
        maxDate={this.transformDate(maxDate)}
        horizontal
        pagingEnabled
        hideArrows={false}
        calendarWidth={Number(pxTransform(calendarWidth ? calendarWidth * 2 : 750))}
        onDayPress={(day) => onDayClick?.({ value:  day.dateString })}
        onMonthChange={mon => {
          onMonthChange?.(mon.dateString);
        }}
        onDayLongPress={day => {
          onDayLongClick?.({ value: day.dateString })
        }}
      />
    );
  }
}
