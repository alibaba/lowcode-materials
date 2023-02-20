import { IPublicModelNode } from '@alilc/lowcode-types';
import snippets from './snippets';

export default {
  group: '原子组件',
  componentName: 'Icon',
  title: '图标',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i1/O1CN01yR8vcY1M504YbHxzo_!!6000000001382-55-tps-56-56.svg',
  icon:
    'https://img.alicdn.com/imgextra/i1/O1CN01yR8vcY1M504YbHxzo_!!6000000001382-55-tps-56-56.svg',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Icon',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'type',
      propType: 'string',
      description: '指定显示哪种图标',
    },
    {
      name: 'size',
      title: {
        label: {
          type: 'i18n',
          zh_CN: '图标尺寸',
          en_US: 'Icon Size',
        },
        tip: {
          type: 'i18n',
          zh_CN: '属性: size | 说明: 指定图标大小',
          en_US: 'prop: size | description: icon size',
        },
      },
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'oneOf',
            value: ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl', 'inherit'],
          },
          'number',
        ],
      },
      description: '指定图标大小',
      defaultValue: 'medium',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: {
      isExtends: true,
      override: [
        {
          name: 'type',
          title: {
            label: {
              type: 'i18n',
              zh_CN: '图标类型',
              en_US: 'Icon',
            },
            tip: {
              type: 'i18n',
              zh_CN: '属性: type | 说明: 图标类型',
              en_US: 'prop: type | description: icon type',
            },
          },
          setter: {
            componentName: 'IconSetter',
            props: {
              hasClear: false,
            },
          },
        },
      ],
    },
    advanced: {
      callbacks: {
        onHoverHook: (currentNode: IPublicModelNode) => {
          return !currentNode?.getPropValue('disabled');
        },
        onMouseDownHook: (e: MouseEvent, currentNode: IPublicModelNode) => {
          return !currentNode?.getPropValue('disabled');
        },
        onClickHook: (e: MouseEvent, currentNode: IPublicModelNode) => {
          return !currentNode?.getPropValue('disabled');
        },
        onMoveHook: (currentNode: IPublicModelNode) => {
          return !currentNode?.getPropValue('disabled');
        },
      },
    },
  },
  category: '通用',
  snippets,
};
