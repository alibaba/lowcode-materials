import React from "react";
import Moment, { MomentInput } from "moment";
import { DatePicker } from "@alifd/next";
import BaseTableField from "./baseTableField";

const { RangePicker } = DatePicker;

export default class DateRangeField extends BaseTableField {
  convertValueToSet(value: { start?: MomentInput; end?: MomentInput }) {
    const { start, end } = value;

    return [
      start ? Moment(start) : null,
      end ? Moment(end) : null,
    ];
  }

  dataChangeHandler(value: any) {
    const { onChange } = this.props;

    if (onChange) {
      const { 0: start, 1: end } = value;

      onChange && onChange({
        start: start ? start.toDate().getTime() : undefined,
        end: end ? end.toDate().getTime() : undefined,
      });
    }
  }

  renderField() {
    const field = this.field;
    const { nextTablePrefix, value, onChange, rules, name, ...rest } = this.props;

    return (<RangePicker
      className={`${nextTablePrefix}date-range-picker`} {...field.init(name, { rules }, rest)} />);
  }
}
