import React from 'react';
import { View } from '@tarojs/components';
import {
  StyleSheet,
  Platform,
  TextInput,
  TextInputProps,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import omit from 'omit.js';

import { ICsInputProps } from './PropType';
import { px } from '../../../../utils';
import { noop } from '../../../../libs/tarojs/utils';

const keyboardTypeMap: { [key: string]: string } = {
  text: 'default',
  number: 'number-pad',
  idcard: 'default',
  digit:
    Platform.select({
      ios: 'decimal-pad',
      android: 'numeric',
    }) || '',
};

@observer
class Input extends React.Component<ICsInputProps> {
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
    const { onKeyDown = noop, onConfirm = noop } = this.props;
    const keyValue = event.nativeEvent.key;
    console.log('[onKeyPress keyvalue] ', keyValue);
    let which;
    keyValue === 'Enter' && (which = 13);
    keyValue === 'Backspace' && (which = 8);
    onKeyDown({
      which,
      target: { value: this.value || '' },
      detail: { value: this.value || '' },
    });
    if (keyValue !== 'Enter') return;
    onConfirm({
      target: { value: this.value || '' },
      detail: { value: this.value || '' },
    });
  };

  @action handleInputChange = (val: string) => {
    if (this.props.onChange) this.props.onChange(val);
  };

  @action clear = () => {
    this.RefsInput && this.RefsInput.clear();
    if (this.props.onChange) this.props.onChange('');
  };

  render() {
    const {
      type,
      inputStyle,
      password,
      style,
      value,
      confirmType,
      maxlength,
      disabled,
      onFocus,
      onBlur,
      onConfirm,
    } = this.props;
    const keyboardType: KeyboardTypeOptions = keyboardTypeMap[
      type || 'text'
    ] as KeyboardTypeOptions;
    return (
      <View className="M-flexbox-horizontal" style={{ width: '100%' }}>
        <TextInput
          value={String(value || '')}
          placeholderTextColor="#999"
          onChangeText={this.handleInputChange}
          onFocus={
            onFocus ? (e) => onFocus?.({ detail: { value: e.target?.value || value } }) : undefined
          }
          onBlur={
            onBlur ? (e) => onBlur?.({ detail: { value: e.target?.value || value } }) : undefined
          }
          underlineColorAndroid="transparent"
          enablesReturnKeyAutomatically={true}
          returnKeyType={confirmType || 'done'}
          onKeyPress={this.onKeyPress}
          onSubmitEditing={onConfirm}
          editable={!disabled}
          selectionColor="#333"
          maxLength={maxlength}
          secureTextEntry={!!password}
          keyboardType={keyboardType}
          style={[styles.input, style, (inputStyle as TextInputProps['style']) || {}]}
          ref={(e) => (this.RefsInput = e)}
          {...omit(this.props, [
            'inputStyle',
            'style',
            'value',
            'onBlur',
            'onFocus',
            'onChange',
            'password',
            'onConfirm',
          ])}
        />
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  input: {
    height: '100%',
    fontSize: px(28),
    paddingTop: px(5),
    paddingBottom: px(5),
    flex: 1,
  },
});
