import React, { ReactNode } from "react";
import classnames from 'classnames';
import { Field } from "@alifd/next";
import { Rule } from "@alifd/next/types/field";

export interface IBaseTableFieldProps {
  name: string;
  value?: any;
  onChange: (value: any) => void;
  nextTablePrefix: string;
  rules?: Rule;
}

class BaseTableField<P = {}> extends React.Component<IBaseTableFieldProps & P> {
  field: Field;
  constructor(props: IBaseTableFieldProps & P) {
    super(props);

    this.field = new Field(this, {
      onChange: (name, value) => {
        this.dataChangeHandler(value);
      },
    });
  }

  componentWillMount() {
    const { name } = this.props;

    this.field.setValue(name, this.convertValueToSet(this.props.value));
  }

  componentWillReceiveProps(nextProps: IBaseTableFieldProps) {
    const { name } = this.props;

    this.field.setValue(name, this.convertValueToSet(nextProps.value));
  }

  validate() {
    return new Promise((resolve) => {
      const { name } = this.props;

      this.field.validate([name], (errors) => {
        resolve(errors);
      });
    });
  }

  convertValueToSet(value: any) {
    return value;
  }

  dataChangeHandler(value: any) {
    const { onChange } = this.props;
    onChange && onChange(value);
  }

  renderField(): ReactNode {
    return null;
  }

  render() {
    const { nextTablePrefix, name } = this.props;
    const field = this.field;
    const errMsg = field.getError(name);
    const fieldState = field.getState(name);

    return (
      <div className={classnames((fieldState === "error") ? `${nextTablePrefix}field-has-error` : "")}>
        <div>
          {this.renderField()}
        </div>
        {errMsg ? <div>
          <div className={`${nextTablePrefix}field-msg`}>{errMsg}</div>
        </div> : null}
      </div>
    );
  }
}

export default BaseTableField;
