import React from "react";
import isFunction from "lodash/isFunction";
import commonTableCellRender from "../utils/render/commonTableCellRender";
import { safeAccess, safeWrite } from "../utils/chainAccess";
import InputField from "./field/inputField";
import SelectField from "./field/selectField";
import RadioField from "./field/radioField";
import DateField from "./field/dateField";
import CustomField from "./field/customField";
import DateRangeField from "./field/dateRangeField";
import BaseTableField from "./field/baseTableField";

const fieldsMap = {
  select: SelectField,
  text: InputField,
  radio: RadioField,
  date: DateField,
  dateRange: DateRangeField,
  custom: CustomField,
};

function canEditCell(canEdit: boolean, rowData: IWebNextTableCellProps['rowData']) {
  if (typeof canEdit === "undefined" || canEdit === null) {
    return true;
  }

  if (isFunction(canEdit)) {
    return canEdit(rowData);
  }

  return !!canEdit;
}

export interface IWebNextTableCellProps {
  rowData: any;
  column: {
    editType?: keyof typeof fieldsMap;
    dataKey: string;
    [prop: string]: any;
  };
  isRenderEditMode?: boolean;
  rowIndex: number;
  nextTablePrefix?: string;
  onCellDataChange?(options: {
    dataKey: IWebNextTableCellProps['column']['dataKey'];
    value: any,
    rowData: IWebNextTableCellProps['rowData'];
    rowIndex: IWebNextTableCellProps['rowIndex'];
  }): void;
}

interface IWebNextTableCellState {
  editable: boolean;
  currentValue: any;
}

export default class WebNextTableCell extends React.Component<IWebNextTableCellProps, IWebNextTableCellState> {
  fieldComponentRef: React.RefObject<BaseTableField>;
  constructor(props: IWebNextTableCellProps) {
    super(props);

    this.state = {
      editable: false,
      currentValue: this.getRowValue(),
    };

    this.fieldComponentRef = React.createRef();
  }

  setEditable(v: boolean) {
    const { rowData } = this.props;
    rowData.__mode__ = v ? "EDIT" : "VIEW";

    this.setState({ editable: !!v });
  }

  getRowValue() {
    const { rowData, column } = this.props;
    const { dataKey } = column;

    return safeAccess(rowData, dataKey);
  }

  saveCell() {
    const { currentValue } = this.state;
    const { rowData, column } = this.props;
    const { dataKey } = column;

    safeWrite(rowData, dataKey, currentValue);
    this.setEditable(false);
  }

  resetCell() {
    this.setState({
      currentValue: this.getRowValue(),
    });

    this.setEditable(false);
  }

  validateCell() {
    const current = this.fieldComponentRef.current;
    const validate = current && current.validate;
    return validate && validate.call(current);
  }

  _fillFields(rowData: IWebNextTableCellProps['rowData'], dataKey: IWebNextTableCellProps['column']['dataKey']) {
    rowData.__fields__ = rowData.__fields__ || {};
    rowData.__fields__[dataKey] = this;
  }

  renderCellEditInner() {
    const { currentValue } = this.state;
    const { nextTablePrefix, column, rowData, rowIndex, onCellDataChange } = this.props;
    const { editType, dataKey } = column;
    const FieldComponent = fieldsMap[editType!];

    let { editProps } = column;
    if (isFunction(editProps)) {
      editProps = editProps(rowData);
    }

    return (<FieldComponent
      ref={this.fieldComponentRef}
      nextTablePrefix={nextTablePrefix}
      name={dataKey}
      value={currentValue}
      onChange={(value: any) => {
        // 兼容乐高 onChange 的返回格式 { value: value, ...rest }
        let realValue = value;
        if (value && (typeof value === 'object') && Object.hasOwnProperty.call(value, 'value')) {
          realValue = value.value;
        }
        this.setState({ currentValue: realValue });
        onCellDataChange && onCellDataChange({
          dataKey,
          value: realValue,
          rowData,
          rowIndex,
        });
      }}
      rowData={rowData}
      {...editProps}
    />);
  }

  render() {
    const { editable } = this.state;
    const { column, rowData, isRenderEditMode, rowIndex } = this.props;
    const { editType, canEdit, dataKey } = column;

    this._fillFields(rowData, dataKey);

    if (isRenderEditMode && editable && editType && editType in fieldsMap && canEditCell(canEdit, rowData)) {
      return (<div onClick={(e) => {
        e.stopPropagation();
      }}>
        {this.renderCellEditInner()}
      </div>);
    }

    return commonTableCellRender(safeAccess(rowData, dataKey), rowIndex, rowData, column);
  }
}
