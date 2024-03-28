import * as React from 'react';
import { Card as AntdCard } from 'antd';
import { IFormItemProps, createVoidSchemaComponent } from '../../shared';
import { connect, mapProps } from '@formily/react';

const MapedCard = connect(
  AntdCard,
  mapProps({
    title: true,
  }),
);

const FormilyCard: React.FC<IFormItemProps> = createVoidSchemaComponent({
  componentName: 'Card',
  component: MapedCard,
});

export default FormilyCard;
