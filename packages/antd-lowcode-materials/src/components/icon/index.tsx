import React, { forwardRef, Ref } from 'react';
import * as icons from '@ant-design/icons';

const createFromIconfontCN = icons.createFromIconfontCN;
interface IconProps {
  type: string;
  className?: string;
  size?: number;
  color?: string;
  rotate?: number;
  spin?: boolean;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps, ref: Ref<any>) => {
  const { type = '', size, color, ...rest } = props;

  const IconComp = ((icons || {}) as any)[type];

  const style = {
    ...rest.style,
    fontSize: size,
    color,
  };


  if (!IconComp) {
    const IconFont = createFromIconfontCN();
    return <IconFont type={type} {...rest} style={style} ref={ref} />;
  }

  return <IconComp {...rest} style={style} twoToneColor={color} ref={ref} />;
};

export default forwardRef(Icon);
