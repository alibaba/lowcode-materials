import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import omit from 'omit.js';

import { Input } from '@tarojs/components';
import { ICsInputProps } from './PropType';
import classNames from 'classnames';

@observer
class TextInput extends React.Component<ICsInputProps> {
  @observable value = '';

  @action handleInputChange = (e: any) => {
    const value = e.target?.value;
    this.value = value;
    if (this.props.onChange) this.props.onChange(value);
  };

  @action clear = () => {
    this.value = '';
    if (this.props.onChange) this.props.onChange('');
  };

  render() {
    const { inputStyle, password, className, placeholderStyle } = this.props;
    return (
      // @ts-ignore
      <Input
        className={classNames('text-input__input', className)}
        onInput={this.handleInputChange}
        placeholderStyle={placeholderStyle || 'color:#999'}
        password={password}
        style={inputStyle}
        {...omit(this.props, ['className', 'inputStyle', 'hideClear', 'onChange'])}
      />
    );
  }
}

export default TextInput;
