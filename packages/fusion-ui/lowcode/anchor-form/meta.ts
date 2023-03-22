import { IComponentDescription } from '../types';
import { hideProp, mockId } from '../utils';
import { operationProps } from '../common';

const AnchorFormMeta: IComponentDescription = {
  componentName: 'AnchorForm',
  title: '电梯表单',
  category: '表单类',
  group: '精选组件',
  docUrl: '',
  screenshot:
    'https://img.alicdn.com/imgextra/i1/O1CN01jnfLpK1rFJ4nPj9Pt_!!6000000005601-55-tps-56-56.svg',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.22',
    exportName: 'AnchorForm',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  configure: {
    supports: { className: true, style: true, events: ['onChange'] },
    component: {
      isContainer: true,
      isMinimalRenderUnit: true,
      nestingRule: {
        childWhitelist: ['ChildForm'],
      },
    },
    props: [
      {
        name: 'anchorConfig',
        title: '电梯设置',
        type: 'group',
        display: 'accordion',
        items: [
          {
            name: 'showAnchor',
            title: '电梯显示',
            defaultValue: true,
            setter: 'BoolSetter',
          },
          {
            title: {
              label: { type: 'i18n', 'en-US': 'direction', 'zh-CN': '锚点方向' },
              tip: 'direction | 锚点方向',
            },
            name: 'anchorProps.direction',
            condition: (target) => {
              const showAnchor = target.getProps().getPropValue('showAnchor');
              return typeof showAnchor === 'undefined' || showAnchor;
            },
            defaultValue: 'ver',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                dataSource: [
                  { label: '垂直', value: 'ver' },
                  { label: '水平', value: 'hoz' },
                ],
                options: [
                  { label: '垂直', value: 'ver' },
                  { label: '水平', value: 'hoz' },
                ],
              },
              initialValue: 'ver',
            },
          },
          {
            title: {
              label: { type: 'i18n', 'en-US': 'hasAffix', 'zh-CN': '固定在顶部' },
              tip: 'hasAffix | direction="hoz" 生效',
            },
            condition: (target) => {
              const showAnchor = target.getProps().getPropValue('showAnchor');
              return (
                showAnchor && target.getProps().getPropValue('anchorProps.direction') === 'hoz'
              );
            },
            name: 'anchorProps.hasAffix',
            setter: { componentName: 'BoolSetter', isRequired: false, initialValue: false },
          },
        ],
      },
      {
        title: {
          label: { type: 'i18n', 'en-US': 'container', 'zh-CN': '容器，默认是 win' },
          tip: 'container | 容器，默认是 window',
        },
        condition: hideProp,
        name: 'container',
        setter: { componentName: 'FunctionSetter', isRequired: false },
      },
      {
        title: {
          label: { type: 'i18n', 'en-US': 'affixProps', 'zh-CN': '固钉配置' },
          tip: 'affixProps | hasAffix={true} 后使用',
        },
        condition: (target) => {
          const hasAffix = target.getProps().getPropValue('hasAffix');
          return typeof hasAffix === 'boolean' && hasAffix;
        },
        name: 'affixProps',
        setter: {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  title: { label: { type: 'i18n', 'en-US': 'container', 'zh-CN': 'container' } },
                  name: 'container',
                  setter: { componentName: 'FunctionSetter', isRequired: false },
                },
                {
                  title: { label: { type: 'i18n', 'en-US': 'offsetTop', 'zh-CN': 'offsetTop' } },
                  name: 'offsetTop',
                  setter: { componentName: 'NumberSetter', isRequired: false, initialValue: 0 },
                },
                {
                  title: {
                    label: { type: 'i18n', 'en-US': 'offsetBottom', 'zh-CN': 'offsetBottom' },
                  },
                  name: 'offsetBottom',
                  setter: { componentName: 'NumberSetter', isRequired: false, initialValue: 0 },
                },
                {
                  title: { label: { type: 'i18n', 'en-US': 'onAffix', 'zh-CN': 'onAffix' } },
                  name: 'onAffix',
                  setter: { componentName: 'FunctionSetter' },
                },
                {
                  title: {
                    label: { type: 'i18n', 'en-US': 'useAbsolute', 'zh-CN': 'useAbsolute' },
                  },
                  name: 'useAbsolute',
                  setter: { componentName: 'BoolSetter', isRequired: false, initialValue: false },
                },
              ],
            },
          },
        },
      },
      ...operationProps,
      {
        title: {
          label: { type: 'i18n', 'en-US': 'onChange', 'zh-CN': '点击不同锚点时的自定' },
          tip: 'onChange | 点击不同锚点时的自定义触发函数',
        },
        condition: hideProp,
        name: 'onChange',
        setter: { componentName: 'FunctionSetter' },
      },
      {
        title: {
          label: { type: 'i18n', 'en-US': 'offsetY', 'zh-CN': '垂直跳转偏移量' },
          tip: 'offsetY | 垂直跳转偏移量',
        },
        condition: hideProp,
        name: 'offsetY',
        defaultValue: 0,
        setter: { componentName: 'NumberSetter', isRequired: false, initialValue: 0 },
      },
      {
        title: {
          label: { type: 'i18n', 'en-US': 'scrollTop', 'zh-CN': '自定义滚动到页首的方' },
          tip: 'scrollTop | 自定义滚动到页首的方法',
        },
        condition: hideProp,
        name: 'scrollTop',
        setter: { componentName: 'FunctionSetter', isRequired: false },
      },
    ],
  },
};
const snippets: Snippet[] = [
  {
    title: '电梯表单',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01jnfLpK1rFJ4nPj9Pt_!!6000000005601-55-tps-56-56.svg',
    schema: {
      componentName: 'AnchorForm',
      props: {
        showAnchor: true,
        anchorProps: {
          direction: 'hoz',
        },
      },
      children: [
        {
          componentName: 'ChildForm',
          props: {
            columns: 2,
            mode: 'independent',
            anchorItemProps: {
              htmlId: mockId(),
              label: 'Tab1',
            },
            cardSectionProps: {
              noBullet: true,
            },
            operationConfig: {},
            labelCol: {
              fixedSpan: 4,
            },
            labelAlign: 'top',
          },
          children: [...new Array(4).keys()].map(() => ({
            componentName: 'FormInput',
            props: {
              formItemProps: {
                primaryKey: mockId(),
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          })),
        },
        {
          componentName: 'ChildForm',
          props: {
            mode: 'independent',
            anchorItemProps: {
              htmlId: mockId(),
              label: 'Tab2',
            },
            cardSectionProps: {
              noBullet: true,
            },
            columns: 2,
            operationConfig: {},
            labelCol: {
              fixedSpan: 4,
            },
            labelAlign: 'top',
          },
          children: [...new Array(4).keys()].map(() => ({
            componentName: 'FormInput',
            props: {
              formItemProps: {
                primaryKey: mockId(),
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          })),
        },
        {
          componentName: 'ChildForm',
          props: {
            mode: 'independent',
            anchorItemProps: {
              htmlId: mockId(),
              label: 'Tab3',
            },
            cardSectionProps: {
              noBullet: true,
            },
            columns: 2,
            operationConfig: {},
            labelCol: {
              fixedSpan: 4,
            },
            labelAlign: 'top',
          },
          children: [...new Array(4).keys()].map(() => ({
            componentName: 'FormInput',
            props: {
              formItemProps: {
                primaryKey: mockId(),
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          })),
        },
        {
          componentName: 'ChildForm',
          props: {
            mode: 'independent',
            anchorItemProps: {
              htmlId: mockId(),
              label: 'Tab4',
            },
            cardSectionProps: {
              noBullet: true,
            },
            columns: 2,
            operationConfig: {},
            labelCol: {
              fixedSpan: 4,
            },
            labelAlign: 'top',
          },
          children: [...new Array(4).keys()].map(() => ({
            componentName: 'FormInput',
            props: {
              formItemProps: {
                primaryKey: mockId(),
                label: '表单项',
                size: 'medium',
                device: 'desktop',
                fullWidth: true,
              },
              placeholder: '请输入',
            },
          })),
        },
      ],
    },
  },
];

export default {
  ...AnchorFormMeta,
  snippets,
};
