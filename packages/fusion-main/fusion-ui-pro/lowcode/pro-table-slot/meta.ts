import { ComponentMetadata } from '@ali/lowcode-types';

const ProTableSlotMeta: ComponentMetadata = {
  componentName: 'ProTableSlot',
  title: 'ProTableSlot',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.8',
    exportName: 'ProTableSlot',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'position',
            'zh-CN': '插入槽位',
          },
          tip: 'position | 插入槽位',
        },
        name: 'position',
        description: '插入槽位',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};

export default {
  ...ProTableSlotMeta,
};
