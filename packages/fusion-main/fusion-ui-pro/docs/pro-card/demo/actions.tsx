import * as React from 'react';
import { ProCard } from '@alifd/fusion-ui';
import { Typography, Button, Box } from '@alifd/next';

const { CardSection } = ProCard;
const { Group: ButtonGroup } = Button;

const PlaceHolderGray = () => {
  return <div style={{ height: 100, width: '100%', background: '#ddd' }} />;
};

const { H4, Paragraph } = Typography;

export default { title: 'ProCard' };

export const Actions = () => {
  return (
    <div>
      <H4>A: 标题区+卡片辅助性功能操作区</H4>
      <ProCard
        title="卡片标题"
        hasCollapse
        tagGroup={[
          'blue',
          { label: 'orange', color: 'orange' },
          { label: 'red', color: 'red' },
          { label: 'turquoise', color: 'turquoise' },
          { label: 'yellow', color: 'yellow' },
          { label: 'green', color: 'green' },
        ]}
        actionButtons={[{ label: '操作一' }, { label: '操作二' }]}
      >
        <PlaceHolderGray />
      </ProCard>

      <H4>B: 标题区+卡片主功能操作区/筛选操作区 1和2不建议同时存在</H4>
      <ProCard title="卡片标题" hasCollapse>
        <CardSection>
          <Box spacing={8}>
            <Button type="primary">创建</Button>
            <Button type="normal">辅助操作</Button>
            <Button type="normal">查看</Button>
            <Button type="normal">编辑</Button>
          </Box>
        </CardSection>
        <CardSection>
          <PlaceHolderGray />
        </CardSection>
      </ProCard>
      <H4>收起/展开操作</H4>
      <Paragraph>收起后，操作栏隐藏不显示</Paragraph>
      <ProCard title="卡片标题" hasCollapse defaultCollapse tagGroup={['标签一', '标签二']}>
        <PlaceHolderGray />
      </ProCard>

      <H4>Inform提示</H4>
      <ProCard title="卡片标题" explanation="我是一条友好的提示框">
        <PlaceHolderGray />
      </ProCard>
    </div>
  );
};

Actions.storyName = '插槽卡片';
Actions.desc = '操作区插槽位置展示';
