import React from 'react';
import { TextareaProps, View } from '@tarojs/components';
import { StyleSheet, Platform, TextInput, TextInputProps, KeyboardTypeOptions, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import omit from 'omit.js';

import { px } from '../../../../utils';
import { RQTextareaProps } from './index.type';
import { noop } from '../../../../libs/tarojs/utils';

const keyboardTypeMap: { [key: string]: string } = {
  text: 'default',
  number: 'numeric',
  idcard: 'default',
  digit:
    Platform.select({
      ios: 'decimal-pad',
      android: 'numeric',
    }) || '',
};

@observer
class Input extends React.Component<RQTextareaProps> {
  private RefsInput: TextInput | null = null;
  @observable value = '';

  /**
   * Callback that is called when a key is pressed.
   * This will be called with `{ nativeEvent: { key: keyValue } }`
   * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
   * the typed-in character otherwise including `' '` for space.
   * Fires before `onChange` callbacks.
   */
  onKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>): void => {
    const { onConfirm = noop } = this.props;
    const keyValue = event.nativeEvent.key;
    console.log('[onKeyPress keyvalue] ', keyValue);
    let which;
    keyValue === 'Enter' && (which = 13);
    keyValue === 'Backspace' && (which = 8);
    if (keyValue !== 'Enter') return;
    onConfirm({
      target: { value: this.value || '' },
      detail: { value: this.value || '' },
    });
  };

  @action handleInputChange = (value: string) => {
    this.props.onChange?.(value);
    this.props.onInput?.({
      // @ts-ignore
      detail: {
        value,
      },
    });
  };

  @action clear = () => {
    this.RefsInput && this.RefsInput.clear();
    this.props.onChange?.('');
    this.props.onInput?.({
      // @ts-ignore
      detail: {
        value: '',
      },
    });
  };

  render() {
    const { value, confirmType, style, maxlength, onFocus, onBlur, onConfirm } = this.props;
    return (
      <TextInput
        value={String(value || '')}
        placeholderTextColor='#999'
        onChangeText={this.handleInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        underlineColorAndroid='transparent'
        enablesReturnKeyAutomatically={true}
        returnKeyType={confirmType || 'done'}
        onKeyPress={this.onKeyPress}
        onSubmitEditing={onConfirm}
        selectionColor='#333'
        maxLength={maxlength}
        multiline
        style={[styles.input, style]}
        ref={(e) => (this.RefsInput = e)}
        {...omit(this.props, ['value', 'style', 'onChange', 'onConfirm'])}
      />
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: px(28),
    paddingTop: px(5),
    paddingBottom: px(5),
    textAlignVertical: 'top',
    flex: 1,
  },
  clear_button__img: {
    width: px(40),
    height: px(40),
  },
});
