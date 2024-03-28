import * as React from 'react';
import {
  CascaderSelect,
  Checkbox,
  DatePicker,
  Input,
  NumberPicker,
  Radio,
  Rating,
  Select,
  TreeSelect,
  Upload,
} from '@alifd/next';

import FormItem from './form-item';

const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const { RangePicker } = DatePicker;
const { TextArea, Password } = Input;

const FormCascaderSelect = wrapper(CascaderSelect, 'FormCascaderSelect');
const FormCheckboxGroup = wrapper(CheckboxGroup, 'FormCheckboxGroup');
const FormDatePicker = wrapper(DatePicker, 'FormDatePicker');
const FormInput = wrapper(Input, 'FormInput');
const FormNumberPicker = wrapper(NumberPicker, 'FormNumberPicker');
const FormRadioGroup = wrapper(RadioGroup, 'FormRadioGroup');
const FormRangePicker = wrapper(RangePicker, 'FormRangePicker');
const FormRating = wrapper(Rating, 'FormRating');
const FormSelect = wrapper(Select, 'FormSelect');
const FormTreeSelect = wrapper(TreeSelect, 'FormTreeSelect');
const FormUpload = wrapper(Upload, 'FormUpload');
const FormTextArea = wrapper(TextArea, 'FormTextArea');
const FormPassword = wrapper(Password, 'FormPassword');

function wrapper(NextFormComponent: any, displayName: string) {
  const WrappedComponent = (props: any) => {
    const { formItemProps = {}, ...componentProps } = props;
    return (
      <FormItem {...formItemProps}>
        <NextFormComponent {...componentProps} />
      </FormItem>
    );
  };
  WrappedComponent.displayName = displayName;
  return WrappedComponent;
}

export {
  FormCascaderSelect,
  FormCheckboxGroup,
  FormDatePicker,
  FormInput,
  FormNumberPicker,
  FormRadioGroup,
  FormRangePicker,
  FormRating,
  FormSelect,
  FormTreeSelect,
  FormUpload,
  FormTextArea,
  FormPassword,
};
