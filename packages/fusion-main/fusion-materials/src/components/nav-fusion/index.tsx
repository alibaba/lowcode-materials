import * as React from 'react';
import { Nav } from '@alifd/next';
const { Item, Group } = Nav;


interface NavfusionProps {
  alt?: string;
  title?: string;
  src?: string;
  style?: object;
  color?:string;
}

/**
 * 文字 字体、大小、行高
 * @param props
 */
const Navfusion: React.ForwardRefRenderFunction<HTMLImageElement, NavfusionProps> = (props, ref) => {
  return (
    <Nav style={{ width: 240 }}>
    <Group label="Group Label 1">
      <Item icon="account">Navigation One</Item>
      <Item icon="account">Navigation Two</Item>
      <Item icon="account">Navigation Three</Item>
    </Group>
    <Group label="Group Label 2">
      <Item icon="account">Navigation Four</Item>
      <Item icon="account">Navigation Five</Item>
      <Item icon="account">Navigation Six</Item>
    </Group>
  </Nav>
  );
};

const RefNavfusion = React.forwardRef(Navfusion);



export default RefNavfusion;
