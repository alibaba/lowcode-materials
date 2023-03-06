import React from "react";
import { Select } from "@alifd/next";
import BaseTableField from "./baseTableField";
import { SelectProps } from "@alifd/next/types/select";

interface ISelectFieldProps {
  renderChildren?(): SelectProps['children'];
}

export default class SelectField extends BaseTableField<ISelectFieldProps> {

  renderField() {
    const field = this.field;
    const { nextTablePrefix, value, onChange, rules, name, renderChildren, ...rest } = this.props;

    return (<Select className={`${nextTablePrefix}select`} {...field.init(name, { rules }, rest)}>
      {renderChildren ? renderChildren() : null}
    </Select>);
  }
}
