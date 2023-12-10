import { IFormItemProps } from '..';
import { useState } from 'react';
import { uuid } from '../';

// 获得formItemSchema
export default (
  { componentProps = {}, fieldProps, decoratorProps = {}, style, ...extra }: IFormItemProps,
  defaultProps?: any,
) => {
  const [defaultName] = useState(uuid());
  const { name, ...rest } = fieldProps;

  const schema = {
    type: 'object',
    properties: {
      [name || defaultName]: {
        type: 'void',
        ...defaultProps,
        ...rest,
        'x-component-props': {
          style,
          ...componentProps['x-component-props'],
          ...(extra || {}),
        },
        ...decoratorProps,
      },
    },
  };

  return schema;
};
