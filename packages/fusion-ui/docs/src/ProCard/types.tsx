import * as React from 'react';
import { ProCard } from '@alifd/fusion-ui';
import { Typography } from '@alifd/next';

const { CardSection } = ProCard;

const PlaceHolderGray = () => {
  return <div style={{ height: 100, width: '100%', background: '#ddd' }} />;
};

const { H4, Paragraph } = Typography;
export default () => {
  return (
    <div>
      <H4>A. 基础卡片</H4>
      <ProCard title="卡片标题">
        <PlaceHolderGray />
      </ProCard>

      <H4>B. 小分组卡片</H4>
      <Paragraph>
        适用于表单/表格/纯文本浏览信息的分组情况，添加标题前的竖线增强内容的区块感
      </Paragraph>
      <ProCard title="卡片标题" segmentLine>
        <CardSection title="分组小标题">
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" loading>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题">
          <PlaceHolderGray />
        </CardSection>
      </ProCard>

      <H4>C. 分栏布局卡片</H4>
      <Paragraph>适用于多种类型内容组合的分组，用竖线分割线体现区块感</Paragraph>
      <ProCard title="卡片标题" explanation="我是一条友好的提示框" segmentLine>
        <CardSection title="分组小标题">
          风低声吹着，吹过百叶窗，轻软的好像羽毛一般；有时候仿佛数声叹息，几乎叫人想起夏季长夜漫漫和风吹动树叶的声音。田鼠已经舒舒服服的在地底下的楼房中睡着了，猫头鹰安坐在沼地深处一棵空心树里，兔子、松鼠、狐狸都躲在家里安然不动。看家的狗在火炉旁边安静地躺着，牛羊在栏圈里悄无声息。
        </CardSection>
        <CardSection title="分组小标题 noBullet" noBullet>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" headerDivider footerDivider hasDividerIndent>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" headerDivider footerDivider>
          <PlaceHolderGray />
        </CardSection>
        <CardSection
          title="分组小标题"
          tagGroup={[
            'blue',
            { label: 'orange', color: 'orange' },
            { label: 'red', color: 'red' },
            { label: 'turquoise', color: 'turquoise' },
            { label: 'yellow', color: 'yellow' },
            { label: 'green', color: 'green' },
          ]}
        >
          <PlaceHolderGray />
        </CardSection>
      </ProCard>
      <ProCard title="卡片标题" explanation="我是一条友好的提示框" segmentLine grid>
        {/* 子卡片设置布局 */}
        <CardSection title="分组小标题" colSpan={12} rowSpan={2}>
          风低声吹着，吹过百叶窗，轻软的好像羽毛一般；有时候仿佛数声叹息，几乎叫人想起夏季长夜漫漫和风吹动树叶的声音。田鼠已经舒舒服服的在地底下的楼房中睡着了，猫头鹰安坐在沼地深处一棵空心树里，兔子、松鼠、狐狸都躲在家里安然不动。看家的狗在火炉旁边安静地躺着，牛羊在栏圈里悄无声息。
        </CardSection>
        {/* 子卡片支持loading */}
        <CardSection title="分组小标题" loading colSpan={12}>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" loading colSpan={12}>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" colSpan={8}>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" colSpan={16}>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" loading colSpan={16}>
          <PlaceHolderGray />
        </CardSection>
        <CardSection title="分组小标题" colSpan={8}>
          <PlaceHolderGray />
        </CardSection>
      </ProCard>
    </div>
  );
};
