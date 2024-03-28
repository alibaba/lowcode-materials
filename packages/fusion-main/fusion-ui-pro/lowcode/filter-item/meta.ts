import { ComponentMetadata } from '@ali/lowcode-types';

const FilterItemMeta: ComponentMetadata = {
  componentName: 'FilterItem',
  title: 'FilterItem',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.6-beta.8',
    exportName: 'FilterItem',
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
            'en-US': 'prefix',
            'zh-CN': '样式前缀',
          },
          tip: 'prefix | 样式前缀',
        },
        name: 'prefix',
        description: '样式前缀',
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
            'en-US': 'label',
            'zh-CN': 'label 标签的文',
          },
          tip: 'label | label 标签的文本',
        },
        name: 'label',
        description: 'label 标签的文本',
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
            'en-US': 'labelCol',
            'zh-CN': 'label 标签布局',
          },
          tip: 'labelCol | label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
        },
        name: 'labelCol',
        description:
          'label 标签布局，通 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
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
            'en-US': 'wrapperCol',
            'zh-CN': '需要为输入控件设置布',
          },
          tip: 'wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
        },
        name: 'wrapperCol',
        description: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
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
            'en-US': 'help',
            'zh-CN': '自定义提示信息，如不',
          },
          tip: 'help | 自定义提示信息，如不设置，则会根据校验规则自动生成.',
        },
        name: 'help',
        description: '自定义提示信息，如不设置，则会根据校验规则自动生成.',
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
            'en-US': 'extra',
            'zh-CN': '额外的提示信息，和 ',
          },
          tip: 'extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面',
        },
        name: 'extra',
        description:
          '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面',
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
            'en-US': 'validateState',
            'zh-CN': '校验状态，如不设置，',
          },
          tip: 'validateState | 校验状态，如不设置，则会根据校验规则自动生成',
        },
        name: 'validateState',
        description: '校验状态，如不设置，则会根据校验规则自动生成',
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
            'en-US': 'hasFeedback',
            'zh-CN': '配合 validat',
          },
          tip: 'hasFeedback | 配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持',
        },
        name: 'hasFeedback',
        description:
          '配合 validateState 属性使用，是否展示 success/loading 的校验状态图标, 目前只有Input支持',
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
            'en-US': 'children',
            'zh-CN': 'node 或者 fu',
          },
          tip: 'children | node 或者 function(values)',
        },
        name: 'children',
        description: 'node 或者 function(values)',
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
            'en-US': 'size',
            'zh-CN': '单个 Item 的 ',
          },
          tip: 'size | 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。',
        },
        name: 'size',
        description:
          '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。',
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
            'en-US': 'labelAlign',
            'zh-CN': '标签的位置',
          },
          tip: 'labelAlign | 标签的位置',
        },
        name: 'labelAlign',
        description: '标签的位置',
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
            'en-US': 'labelTextAlign',
            'zh-CN': '标签的左右对齐方式',
          },
          tip: 'labelTextAlign | 标签的左右对齐方式',
        },
        name: 'labelTextAlign',
        defaultValue: 'right',
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
            'en-US': 'required',
            'zh-CN': '[表单校验] 不能为',
          },
          tip: 'required | [表单校验] 不能为空',
        },
        name: 'required',
        description: '[表单校验] 不能为空',
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
            'en-US': 'asterisk',
            'zh-CN': 'required 的',
          },
          tip: 'asterisk | required 的星号是否显示',
        },
        name: 'asterisk',
        description: 'required 的星号是否显示',
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
            'en-US': 'requiredMessage',
            'zh-CN': 'required 自',
          },
          tip: 'requiredMessage | required 自定义错误信息',
        },
        name: 'requiredMessage',
        description: 'required 自定义错误信息',
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
            'en-US': 'requiredTrigger',
            'zh-CN': 'required 自',
          },
          tip: 'requiredTrigger | required 自定义触发方式',
        },
        name: 'requiredTrigger',
        description: 'required 自定义触发方式',
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
            'en-US': 'min',
            'zh-CN': '[表单校验] 最小值',
          },
          tip: 'min | [表单校验] 最小值',
        },
        name: 'min',
        description: '[表单校验] 最小值',
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
            'en-US': 'max',
            'zh-CN': '[表单校验] 最大值',
          },
          tip: 'max | [表单校验] 最大值',
        },
        name: 'max',
        description: '[表单校验] 最大值',
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
            'en-US': 'minmaxMessage',
            'zh-CN': 'min/max 自定',
          },
          tip: 'minmaxMessage | min/max 自定义错误信息',
        },
        name: 'minmaxMessage',
        description: 'min/max 自定义错误信息',
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
            'en-US': 'minmaxTrigger',
            'zh-CN': 'min/max 自定',
          },
          tip: 'minmaxTrigger | min/max 自定义触发方式',
        },
        name: 'minmaxTrigger',
        description: 'min/max 自定义触发方式',
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
            'en-US': 'minLength',
            'zh-CN': '[表单校验] 字符串',
          },
          tip: 'minLength | [表单校验] 字符串最小长度 / 数组最小个数',
        },
        name: 'minLength',
        description: '[表单校验] 字符串最小长度 / 数组最小个数',
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
            'en-US': 'maxLength',
            'zh-CN': '[表单校验] 字符串',
          },
          tip: 'maxLength | [表单校验] 字符串最大长度 / 数组最大个数',
        },
        name: 'maxLength',
        description: '[表单校验] 字符串最大长度 / 数组最大个数',
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
            'en-US': 'minmaxLengthMessage',
            'zh-CN': 'minLength/',
          },
          tip: 'minmaxLengthMessage | minLength/maxLength 自定义错误信息',
        },
        name: 'minmaxLengthMessage',
        description: 'minLength/maxLength 自定义错误信息',
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
            'en-US': 'minmaxLengthTrigger',
            'zh-CN': 'minLength/',
          },
          tip: 'minmaxLengthTrigger | minLength/maxLength 自定义触发方式',
        },
        name: 'minmaxLengthTrigger',
        description: 'minLength/maxLength 自定义触发方式',
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
            'en-US': 'length',
            'zh-CN': '[表单校验] 字符串',
          },
          tip: 'length | [表单校验] 字符串精确长度 / 数组精确个数',
        },
        name: 'length',
        description: '[表单校验] 字符串精确长度 / 数组精确个数',
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
            'en-US': 'lengthMessage',
            'zh-CN': 'length 自定义',
          },
          tip: 'lengthMessage | length 自定义错误信息',
        },
        name: 'lengthMessage',
        description: 'length 自定义错误信息',
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
            'en-US': 'lengthTrigger',
            'zh-CN': 'length 自定义',
          },
          tip: 'lengthTrigger | length 自定义触发方式',
        },
        name: 'lengthTrigger',
        description: 'length 自定义触发方式',
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
            'en-US': 'pattern',
            'zh-CN': '正则校验',
          },
          tip: 'pattern | 正则校验',
        },
        name: 'pattern',
        description: '正则校验',
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
            'en-US': 'patternMessage',
            'zh-CN': 'pattern 自定',
          },
          tip: 'patternMessage | pattern 自定义错误信息',
        },
        name: 'patternMessage',
        description: 'pattern 自定义错误信息',
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
            'en-US': 'patternTrigger',
            'zh-CN': 'pattern 自定',
          },
          tip: 'patternTrigger | pattern 自定义触发方式',
        },
        name: 'patternTrigger',
        description: 'pattern 自定义触发方式',
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
            'en-US': 'format',
            'zh-CN': '[表单校验] 四种常',
          },
          tip: 'format | [表单校验] 四种常用的 pattern',
        },
        name: 'format',
        description: '[表单校验] 四种常用的 pattern',
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
            'en-US': 'formatMessage',
            'zh-CN': 'format 自定义',
          },
          tip: 'formatMessage | format 自定义错误信息',
        },
        name: 'formatMessage',
        description: 'format 自定义错误信息',
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
            'en-US': 'formatTrigger',
            'zh-CN': 'format 自定义',
          },
          tip: 'formatTrigger | format 自定义触发方式',
        },
        name: 'formatTrigger',
        description: 'format 自定义触发方式',
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
            'en-US': 'validator',
            'zh-CN': '[表单校验] 自定义',
          },
          tip: 'validator | [表单校验] 自定义校验函数',
        },
        name: 'validator',
        description: '[表单校验] 自定义校验函数',
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
            'en-US': 'validatorTrigger',
            'zh-CN': 'validator ',
          },
          tip: 'validatorTrigger | validator 自定义触发方式',
        },
        name: 'validatorTrigger',
        description: 'validator 自定义触发方式',
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
            'en-US': 'autoValidate',
            'zh-CN': '是否修改数据时自动触',
          },
          tip: 'autoValidate | 是否修改数据时自动触发校验',
        },
        name: 'autoValidate',
        description: '是否修改数据时自动触发校验',
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
            'en-US': 'labelWidth',
            'zh-CN': '在响应式布局下，且l',
          },
          tip: 'labelWidth | 在响应式布局下，且label在左边时，label的宽度是多少',
        },
        name: 'labelWidth',
        description: '在响应式布局下，且label在左边时，label的宽度是多少',
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
            'en-US': 'colSpan',
            'zh-CN': '在响应式布局模式下，',
          },
          tip: 'colSpan | 在响应式布局模式下，表单项占多少列',
        },
        name: 'colSpan',
        description: '在响应式布局模式下，表单项占多少列',
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
            'en-US': 'isPreview',
            'zh-CN': '是否开启预览态',
          },
          tip: 'isPreview | 是否开启预览态',
        },
        name: 'isPreview',
        description: '是否开启预览态',
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
            'en-US': 'renderPreview',
            'zh-CN': '预览态模式下渲染的内',
          },
          tip: 'renderPreview | 预览态模式下渲染的内容',
        },
        name: 'renderPreview',
        description: '预览态模式下渲染的内容',
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
            'en-US': 'useLabelForErrorMessage',
            'zh-CN': '是否使用 label',
          },
          tip: 'useLabelForErrorMessage | 是否使用 label 替换校验信息的 name 字段',
        },
        name: 'useLabelForErrorMessage',
        description: '是否使用 label 替换校验信息的 name 字段',
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
            'en-US': 'colon',
            'zh-CN': '表示是否显示 lab',
          },
          tip: 'colon | 表示是否显示 label 后面的冒号',
        },
        name: 'colon',
        description: '表示是否显示 label 后面的冒号',
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
            'en-US': 'valueName',
            'zh-CN': '子元素的 value',
          },
          tip: 'valueName | 子元素的 value 名称',
        },
        name: 'valueName',
        description: '子元素的 value 名称',
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
            'en-US': 'fullWidth',
            'zh-CN': '单个 Item 中表',
          },
          tip: 'fullWidth | 单个 Item 中表单类组件宽度是否是 100%',
        },
        name: 'fullWidth',
        description: '单个 Item 中表单类组件宽度是否是 100%',
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
      style: true,
      className: true,
    },
    component: {},
  },
};

export default {
  ...FilterItemMeta,
};
