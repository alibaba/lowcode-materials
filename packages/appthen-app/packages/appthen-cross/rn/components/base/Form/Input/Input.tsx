import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import omit from 'omit.js';

import { Input } from '@tarojs/components';
import { ICsInputProps } from './PropType';

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
    const { inputStyle, password } = this.props;
    return (
      <Input
        className='text-input__input'
        onInput={this.handleInputChange}
        // style={{ backgroundColor: 'red', width: '100%' }}
        placeholderStyle='color:#999'
        password={password}
        style={inputStyle}
        {...omit(this.props, ['inputStyle', 'hideClear', 'onChange'])}
      />
    );
  }
}

export default TextInput;
