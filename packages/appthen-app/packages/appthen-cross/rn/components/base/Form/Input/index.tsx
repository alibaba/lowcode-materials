import React from 'react';
import { observable, autorun, IReactionDisposer } from 'mobx';
import { observer } from 'mobx-react';
import { $throttle } from '../../../../utils';

import Input from './Input';
import { ICsInputProps } from './PropType';

@observer
export class CheckInput extends React.Component<ICsInputProps> {
  componentDidMount() {
    this.val = this.props.value || '';
    this.ar = autorun(() => {
      const val = this.props.value || '';
      this.val = val;
    })
  }

  componentWillUnmount() {
    this.ar && this.ar();
  }

  ar?: IReactionDisposer;

  @observable val: string | number = '';
  onChange = (v: string) => {
    const { checkType } = this.props;
    let _value = v;
    const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    if (checkType === 'int') {
      if (!(/^\d+$/.test(v) || v === '')) {
        _value = this.val as string;
      }
    }
    if (checkType === 'price') {
      if (!(reg.test(v) || (v.split('.').length === 2 && v.split('.')[1].length < 3) || v === '')) {
        _value = this.val as string;
      }
    }
    this.val = _value;
    this.checkValue();
    this.props.onChange && this.props.onChange(_value);
  };

  checkValue = $throttle(() => {
    this.val = this.val + ' ';
    setTimeout(() => {
      this.val = String(this.val).replace(' ', '');
    }, 10);
  }, 50)

  render() {
    const { openType } = this.props;

    return (
      <Input
        {...this.props}
        {...(openType ? { type: openType } : {})}
        // @ts-ignore
        value={this.val}
        onChange={this.onChange}
      />
    );
  }
}

export default (props: ICsInputProps) => {
  return props.checkType ? <CheckInput {...props} /> : <Input {...props} />
}
