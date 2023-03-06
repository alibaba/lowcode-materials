import React from "react";
import Moment, { MomentInput } from "moment";
import { DatePicker } from "@alifd/next";
import BaseTableField from "./baseTableField";

export default class DateField extends BaseTableField {
  convertValueToSet(value: MomentInput) {
    return value ? Moment(value) : value;
  }

  dataChangeHandler(value: any) {
    const { onChange } = this.props;
    onChange && onChange(value ? value.toDate().getTime() : value);
  }

  renderField() {
    const field = this.field;
    const { nextTablePrefix, value, onChange, rules, name, ...rest } = this.props;

    return (<DatePicker className={`${nextTablePrefix}date-picker`} {...field.init(name, { rules }, rest)} />);
  }
}
