import { InitResult, Rule } from "@alifd/next/types/field";
import { ReactNode } from "react";
import BaseTableField from "./baseTableField";

export interface ICustomFieldProps {
  rowData: any;
  renderField: (props: InitResult<any>, value: any, rowData: any) => ReactNode;
}

export default class CustomField extends BaseTableField<ICustomFieldProps> {

  renderField() {
    const field = this.field;
    const { deepTablePrefix, value, onChange, rules, name, renderField, rowData, ...rest } = this.props;

    const props = field.init(name, { rules }, rest);
    delete props.value; // 外部默认为非受控模式

    return renderField(props, value, rowData);
  }
}
