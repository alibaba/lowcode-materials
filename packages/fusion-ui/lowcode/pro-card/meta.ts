import { CardMeta, CardSectionMeta, CardProps } from '@alifd/pro-layout/lowcode/pro-card/meta';

function deepClone(obj) {
  const newObj = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = obj && typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
      }
    }
  }
  return newObj;
}

const FusionUICardMeta = deepClone(CardMeta);
const FusionUICardSectionMeta = deepClone(CardSectionMeta);

FusionUICardMeta.npm = {
  package: '@alifd/fusion-ui',
  version: '1.0.0',
  exportName: 'ProCard',
  main: 'lib/index.js',
  destructuring: true,
  subName: '',
};
FusionUICardSectionMeta.npm = {
  package: '@alifd/fusion-ui',
  version: '1.0.0',
  exportName: 'ProCard',
  main: 'lib/index.js',
  destructuring: true,
  subName: 'CardSection',
};

export { FusionUICardMeta as CardMeta, FusionUICardSectionMeta as CardSectionMeta, CardProps };

export default [
  {
    ...FusionUICardMeta,
    snippets: [
      {
        title: '卡片',
        screenshot:
          'https://img.alicdn.com/imgextra/i4/O1CN01qjZnGj1OW8lpLCQqm_!!6000000001712-55-tps-56-56.svg',
        schema: {
          componentName: 'ProCard',
          props: {
            title: '标题',
            hasDivider: true,
            isFillContainer: true,
          },
        },
      },
    ],
  },
  {
    ...FusionUICardSectionMeta,
    snippets: [
      {
        title: '内部卡片',
        screenshot:
          'https://img.alicdn.com/imgextra/i1/O1CN01QLAiJK1tXHqxBV16n_!!6000000005911-55-tps-56-56.svg',
        schema: {
          componentName: 'ProCardSection',
          props: {
            title: '子标题',
            hasDivider: true,
            isFillContainer: true,
          },
        },
      },
    ],
  },
];

export const wrapWithCard = (snippets) => {
  if (Array.isArray(snippets)) {
    return snippets.map((snippet) => {
      return {
        ...snippet,
        schema: {
          componentName: 'ProCard',
          props: {
            title: snippet.title || '标题',
            hasDivider: true,
            isFillContainer: true,
          },
          children: [snippet.schema],
        },
      };
    });
  }
  return {
    ...snippets,
    schema: {
      componentName: 'ProCard',
      props: {
        title: snippets.title || '标题',
        hasDivider: true,
        isFillContainer: true,
      },
      children: [snippets.schema],
    },
  };
};
