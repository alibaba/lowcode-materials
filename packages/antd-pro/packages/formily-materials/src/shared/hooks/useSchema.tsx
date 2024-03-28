import { useState } from 'react';
import { IFormItemProps } from '..';
import { Schema } from '@formily/react';
import { uuid } from '../';
import { isPlainObj } from '@formily/shared';
import { isExpression } from '../utils';

const NeedShownExpression = {
  title: true,
  description: true,
  default: true,
  'x-content': true,
  'x-value': true,
};

const NeedIgnoreFormilyProps = {
  'x-reactions': true,
  'x-validator': true,
};

const traverse = (obj, cb: any) => {
  if (isPlainObj(obj)) {
    Object.keys(obj).forEach((key) => {
      traverse(obj[key], cb);
      obj[key] = cb(key, obj[key]);
    });
  }
};

// 包裹 'x-decorator': 'FormItem'
const useSchema = (
  {
    componentProps = {},
    fieldProps,
    decoratorProps = {},
    style,
    __designMode,
    ...extra
  }: IFormItemProps,
  defaultProps?: any,
): Schema => {
  const { name, ...rest } = fieldProps;
  const [initialName] = useState(uuid());
  const isDesignMode = __designMode === 'design';
  const isReadOnly = isDesignMode ? true : defaultProps?.readOnly || rest?.readOnly;

  const schema = {
    type: 'object',
    properties: {
      [name || initialName]: {
        'x-decorator': 'FormItem',
        ...defaultProps,
        ...rest,
        readOnly: isReadOnly,
        'x-component-props': {
          style,
          ...componentProps['x-component-props'],
          ...(extra || {}),
        },
        ...decoratorProps,
      },
    },
  };

  if (isDesignMode) {
    traverse(schema, (key, value) => {
      if (NeedIgnoreFormilyProps[key]) {
        return null;
      } else if (isExpression(value)) {
        if (NeedShownExpression[key]) {
          // 多包一层 {{}}，故意触发 编译 错误
          return `{{${value}}}`;
        }
      } else {
        return value;
      }
    });
  }

  return new Schema(schema);
};

export default useSchema;
