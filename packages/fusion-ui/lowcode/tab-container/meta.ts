import { ComponentMetadata, Snippet } from '@ali/lowcode-types';

import props from './props';

const snippets: Snippet[] = [
  {
    title: '选项卡',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN01mh9LPG268B90t8DaA_!!6000000007616-55-tps-56-56.svg',
    schema: {
      componentName: 'TabContainer',
      props: {
        shape: 'pure',
        size: 'medium',
        excessMode: 'slide',
      },
      children: [
        {
          componentName: 'TabContainer.Item',
          props: {
            title: '标签项1',
            primaryKey: 'tab-item-1',
          },
        },
        {
          componentName: 'TabContainer.Item',
          props: {
            title: '标签项2',
            primaryKey: 'tab-item-2',
          },
        },
      ],
    },
  },
];

const tabItemMeta = {
  componentName: 'TabContainer.Item',
  title: '选项卡',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'TabContainer',
    main: 'lib/index.js',
    destructuring: true,
    subName: 'Item',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '选项卡标题',
          },
          tip: 'title | 选项卡标题',
        },
        name: 'title',
        description: '选项卡标题',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'closeable',
            'zh-CN': '单个选项卡是否可关闭',
          },
          tip: 'closeable | 单个选项卡是否可关闭',
        },
        name: 'closeable',
        description: '单个选项卡是否可关闭',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '选项卡是否被禁用',
          },
          tip: 'disabled | 选项卡是否被禁用',
        },
        name: 'disabled',
        description: '选项卡是否被禁用',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefix',
            'zh-CN': '样式类名的品牌前缀',
          },
          tip: 'prefix | 样式类名的品牌前缀',
        },
        name: 'prefix',
        description: '样式类名的品牌前缀',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'locale',
            'zh-CN': '国际化文案对象，属性',
          },
          tip: 'locale | 国际化文案对象，属性为组件的 displayName',
        },
        name: 'locale',
        description: '国际化文案对象，属性为组件的 displayName',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'pure',
            'zh-CN': '是否开启 Pure ',
          },
          tip: 'pure | 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用',
        },
        name: 'pure',
        description: '是否开启 Pure Render 模式，会提高性能，但是也会带来副作用',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'warning',
            'zh-CN': '是否在开发模式下显示',
          },
          tip: 'warning | 是否在开发模式下显示组件属性被废弃的 warning 提示',
        },
        name: 'warning',
        description: '是否在开发模式下显示组件属性被废弃的 warning 提示',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rtl',
            'zh-CN': '是否开启 rtl 模',
          },
          tip: 'rtl | 是否开启 rtl 模式',
        },
        name: 'rtl',
        description: '是否开启 rtl 模式',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onClick',
        },
        {
          name: 'onChange',
        },
      ],
      style: true,
    },
    component: {
      isContainer: true,
      disableBehaviors: '*',
    },
    advanced: {
      hideSelectTools: true,
      callbacks: {
        onMouseDownHook: () => false,
        onClickHook: () => false,
      },
    },
  },
};

const TabContainerMeta: ComponentMetadata[] = [
  {
    componentName: 'TabContainer',
    title: '选项卡',
    category: '布局容器类',
    group: '精选组件',
    docUrl: '',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN01mh9LPG268B90t8DaA_!!6000000007616-55-tps-56-56.svg',
    devMode: 'proCode',
    npm: {
      package: '@alifd/fusion-ui',
      version: '{{version}}',
      exportName: 'TabContainer',
      main: 'lib/index.js',
      destructuring: true,
      subName: '',
    },
    configure: {
      component: {
        isContainer: true,
        nestingRule: {
          childWhitelist: ['TabContainer.Item'],
        },
      },
      props,
      supports: {
        style: true,
      },
    },
    snippets,
  },
  tabItemMeta,
  // compatible with the exsting json schema which has componentName: Tab.Item
  {
    ...tabItemMeta,
    componentName: 'Tab.Item',
  }
];

export default TabContainerMeta;
