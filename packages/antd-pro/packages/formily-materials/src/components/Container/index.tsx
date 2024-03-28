import * as React from 'react';
import { createElement } from 'react';
import { IFormItemProps, createVoidSchemaComponent } from '../../shared';

export interface IContainerProps {
  style?: object;
}

const Container: React.FC<IContainerProps> = (props) => {
  return <div {...props}>{props.children}</div>;
};

const FormilyContainer: React.FC<IFormItemProps> = createVoidSchemaComponent({
  componentName: 'Container',
  component: Container,
});

export default FormilyContainer;
