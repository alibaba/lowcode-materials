import React from "react";
import { Input } from "@alifd/next";
import BaseTableField from "./baseTableField";

export default class InputField extends BaseTableField {

  renderField() {
    const field = this.field;
    const { nextTablePrefix, value, onChange, rules, name, ...rest } = this.props;

    return (
      <Input
        className={`${nextTablePrefix}input`} {...field.init(name, { rules }, rest)} />
    );
  }
}
