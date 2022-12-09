import * as React from 'react';
import { ProCard } from '@alifd/fusion-ui';
import { Typography } from '@alifd/next';

const { CardSection } = ProCard;

const PlaceHolderGray = () => {
  return <div style={{ height: 100, width: '100%', background: '#ddd' }} />;
};

const { H4 } = Typography;

export default () => {
  return (
    <div>
      <H4>A. 没有标题卡片</H4>
      <ProCard>
        <PlaceHolderGray />
      </ProCard>

      <ProCard actionButtons={[{ label: '操作一' }, { label: '操作二' }]}>
        <PlaceHolderGray />
      </ProCard>

      <ProCard hasCollapse>
        <PlaceHolderGray />
      </ProCard>
      <H4>B. CardSection没有标题</H4>

      <ProCard title="卡片标题">
        <CardSection>
          <PlaceHolderGray />
        </CardSection>
        <CardSection loading>
          <PlaceHolderGray />
        </CardSection>
        <CardSection>
          <PlaceHolderGray />
        </CardSection>
      </ProCard>

      <H4>C. Card没有标题</H4>

      <ProCard grid>
        <CardSection>
          <PlaceHolderGray />
        </CardSection>
        <CardSection loading>
          <PlaceHolderGray />
        </CardSection>
        <CardSection>
          <PlaceHolderGray />
        </CardSection>
      </ProCard>
    </div>
  );
};
