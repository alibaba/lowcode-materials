import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const AtSliderMeta: IPublicTypeComponentMetadata = {
  componentName: 'AtSlider',
  title: '滑动条',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'cross-ui',
    version: '0.0.4',
    exportName: 'AtSlider',
    main: '',
    destructuring: true,
    subName: '',
  },
  group: '原子组件',
  category: '数据输入',
  icon: 'rqelong-range',
  configure: {
    props: [
      {
        name: 'componentSetterHeader',
        title: ' ',
        virtual: () => true,
        display: 'plain',
        setter: {
          componentName: 'ComponentHeaderSetter',
          props: {
            fastBind: {
              inputField: 'value',
              outField: 'onChange',
              outFieldValue: 'detail.value',
            },
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'value',
            'zh-CN': '当前取值',
          },
          tip: 'value | 当前取值',
        },
        name: 'value',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'min',
            'zh-CN': '最小值',
          },
          tip: 'min | 最小值',
        },
        name: 'min',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'max',
            'zh-CN': '最大值',
          },
          tip: 'max | 最大值',
        },
        name: 'max',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'step',
            'zh-CN': '步长',
          },
          tip: 'step | 步长，取值必须大于 0，并且可被 max - min 整除',
        },
        name: 'step',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '是否禁用',
          },
          tip: 'disabled | 是否禁用',
        },
        name: 'disabled',
        description: '是否禁用',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'activeColor',
            'zh-CN': '已选颜色',
          },
          tip: 'activeColor | 已选择的颜色',
        },
        name: 'activeColor',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'backgroundColor',
            'zh-CN': '线条颜色',
          },
          tip: 'backgroundColor | 背景条的颜色',
        },
        name: 'backgroundColor',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'blockSize',
            'zh-CN': '滑块大小',
          },
          tip: 'blockSize | 滑块的大小，取值范围为 12-28',
        },
        name: 'blockSize',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'blockColor',
            'zh-CN': '滑块颜色',
          },
          tip: 'blockColor | 滑块的颜色',
        },
        name: 'blockColor',
        setter: {
          componentName: 'ColorSetter',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showValue',
            'zh-CN': '显示数值',
          },
          tip: 'showValue | 是否显示当前的 Value',
        },
        name: 'showValue',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          description: '拖动后触发的',
          // @ts-ignore
          template: "onChange(e, ${extParams}) {\n  console.log('onChange', e);\n}",
        },
        {
          name: 'onChanging',
          description: '拖动后触发的',
          // @ts-ignore
          template: "onChanging(e, ${extParams}) {\n  console.log('onChanging', e);\n}",
        },
      ]
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '滑动条',
    screenshot: '',
    schema: {
      componentName: 'AtSlider',
      props: {},
    },
  },
];

export default {
  ...AtSliderMeta,
  snippets,
};
