import classNames from 'classnames';
import omit from 'omit.js';
import React, { createElement } from 'react';

import { InputProps } from './types/Input';

import './Input.scss';
import styleManager from '../utils/styleCssManager';

function getTrueType(type: string, confirmType: string, password: boolean) {
  if (!type) {
    throw new Error('unexpected type');
  }
  if (confirmType === 'search') type = 'search';
  if (password) type = 'password';
  if (type === 'digit') type = 'number';

  return type;
}

function fixControlledValue(value?: string) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

let id = 0;

class Input extends React.Component<InputProps> {
  constructor() {
    super(...arguments);
    this.onInput = this.onInput.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleComposition = this.handleComposition.bind(this);

    // input hook
    this.isOnComposition = false;
    this.onInputExcuted = false;

    this.styleId = 'at-input-' + id++;
  }

  static defaultProps = {
    type: 'text',
  };

  styleId = '';

  componentDidMount() {
    this.updatePlacehodlerStyle();
  }

  updatePlacehodlerStyle() {
    const { placeholderStyle } = this.props;
    if (placeholderStyle) {
      const css = `
          .${this.styleId}::placeholder {
            ${placeholderStyle}
          }
        `;
      styleManager.set(this.styleId, css);
    } else {
      styleManager.remove(this.styleId);
    }
  }

  componentDidUpdate(prevProps: Readonly<InputProps>, prevState: Readonly<{}>, snapshot?: any): void {
    // 判断placehodlerStyle是否变化，plaeholderStyle变化时，需要重新设置样式，注意placeholderStyle是字符串也可能是style对象
    if (this.props.placeholderStyle !== prevProps.placeholderStyle) {
      // 更新placeholder样式
      this.updatePlacehodlerStyle();
    }
  }

  onInput(e: InputEvent) {
    const { type, maxLength, confirmType, password, onInput = '', onChange = '' } = this.props;
    if (!this.isOnComposition && !this.onInputExcuted) {
      let value = e.target.value;
      const inputType = getTrueType(type, confirmType, password);
      this.onInputExcuted = true;
      /* 修复 number 类型 maxLength 无效 */
      if (inputType === 'number' && value && maxLength <= value.length) {
        value = value.substring(0, maxLength);
        e.target.value = value;
      }
      e.detail = { ...e.detail };

      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: { value },
      });

      // // 修复 IOS 光标跳转问题
      // if (!(['number', 'file'].indexOf(inputType) >= 0)) {
      //   const pos = e.target.selectionEnd
      //   setTimeout(
      //     () => {
      //       e.target.selectionStart = pos
      //       e.target.selectionEnd = pos
      //     }
      //   )
      // }

      if (onChange) return onChange(e);
      if (onInput) return onInput(e);
    }
  }

  onFocus(e: any) {
    const { onFocus } = this.props;
    this.onInputExcuted = false;
    Object.defineProperty(e, 'detail', {
      enumerable: true,
      value: {
        value: e.target.value,
      },
    });
    onFocus && onFocus(e);
  }

  onBlur(e) {
    const { onBlur } = this.props;
    Object.defineProperty(e, 'detail', {
      enumerable: true,
      value: {
        value: e.target.value,
      },
    });
    onBlur && onBlur(e);
  }

  onKeyDown(e) {
    const { onConfirm, onKeyDown } = this.props;
    this.onInputExcuted = false;
    onKeyDown && onKeyDown(e);
    if (e.keyCode === 13 && onConfirm) {
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value,
        },
      });
      onConfirm(e);
    }
  }

  handleComposition(e) {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (e.type === 'compositionend') {
      this.isOnComposition = false;
      this.onInputExcuted = false;
      this.onInput(e);
    } else {
      this.isOnComposition = true;
    }
  }

  render() {
    const {
      className = '',
      placeholder,
      type = 'text',
      password,
      disabled,
      maxLength,
      confirmType = '',
      focus = false,
      value,
      placeholderStyle,
    } = this.props;
    const cls = classNames('taro-input', this.styleId, className);
    const otherProps = omit(this.props, [
      'className',
      'placeholder',
      'disabled',
      'max',
      'onChange',
      'onFocus',
      'onBlur',
      'type',
      'placeholderStyle',
      'maxlength',
      'autoFocus',
      'password',
    ]);

    if ('value' in this.props) {
      otherProps.value = fixControlledValue(value);
    }

    return (
      <input
        ref={(input) => {
          this.inputRef = input;
        }}
        {...otherProps}
        className={cls}
        placeholder={placeholder}
        disabled={disabled}
        onInput={this.onInput}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyDown={this.onKeyDown}
        type={getTrueType(type, confirmType, password)}
        // onCompositionStart={this.handleComposition}
        // onCompositionEnd={this.handleComposition}
      />
    );
  }
}

export default Input;
