import React, { ReactNode } from "react";
import { Radio } from "@alifd/next";
import BaseTableField from "./baseTableField";
import { GroupProps } from "@alifd/next/types/radio";

const RadioGroup = Radio.Group;

interface IRadioFieldProps {
  renderChildren?(): GroupProps['children'];
}

export default class RadioField extends BaseTableField<IRadioFieldProps> {

  renderField() {
    const field = this.field;
    const { deepTablePrefix, value, onChange, rules, name, renderChildren, ...rest } = this.props;
    if (renderChildren) {
      return (
        <RadioGroup className={`${deepTablePrefix}radio-group`} {...field.init(name, { rules }, rest)}>
          {renderChildren()}
        </RadioGroup>
      );
    }
    return null;

  }
}
