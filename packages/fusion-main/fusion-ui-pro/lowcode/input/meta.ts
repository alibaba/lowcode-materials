import { IProps } from '../types';
import { wrapFormItemProps } from '../utils/form-utils';

const props: IProps[] = wrapFormItemProps([
  {
    name: 'label',
    setter: 'StringSetter',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '标签文本',
        en_US: 'Label',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: label | 说明: 标签文本内容',
        en_US: 'prop: label | description: label content',
      },
    },
  },
  {
    name: 'defaultValue',
    title: {
      label: '默认值',
      tip: 'defaultValue|初始值',
    },
    setter: 'StringSetter',
  },
  {
    name: 'placeholder',
    defaultValue: '请输入',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '输入提示',
        en_US: 'Placeholder',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: placeholder | 说明: 输入提示',
        en_US: 'prop: placeholder | description: placeholder',
      },
    },
    setter: 'StringSetter',
  },
  {
    name: 'state',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '状态',
        en_US: 'State',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: state | 说明: 状态\n@enumdesc 错误, 校验中, 成功, 警告',
        en_US: 'prop: state | description: input state',
      },
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          {
            value: 'error',
            title: 'error',
          },
          {
            value: 'loading',
            title: 'loading',
          },
          {
            value: 'success',
            title: 'success',
          },
          {
            value: 'warning',
            title: 'warning',
          },
          {
            value: '',
            title: '默认',
          },
        ],
      },
    },
  },
  {
    name: 'size',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '尺寸',
        en_US: 'Size',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大',
        en_US: 'prop: size | description: size',
      },
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: ['small', 'medium', 'large'],
      },
    },
    defaultValue: 'medium',
  },
  {
    name: 'maxLength',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '最大长度',
        en_US: 'MaxLength',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: maxLength | 说明: 最大长度',
        en_US: 'prop: maxLength | description: max length',
      },
    },
    setter: 'NumberSetter',
    description: '最大长度',
  },
  {
    name: 'hasClear',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '显示清除',
        en_US: 'Show Clear',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: hasClear | 说明: 是否出现清除按钮',
        en_US: 'prop: hasClear | description: show clear icon',
      },
    },
    setter: 'BoolSetter',
    description: '是否出现清除按钮',
  },
  {
    name: 'disabled',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '是否禁用',
        en_US: 'Disabled',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: disabled | 说明: 是否被禁用',
        en_US: 'prop: disabled | description: disabled',
      },
    },
    setter: 'BoolSetter',
    description: '是否禁用',
  },
  {
    name: 'showLimitHint',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '展示限制',
        en_US: 'ShowLimit',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: showLimitHint | 说明: 是否展现最大长度样式',
        en_US: 'prop: showLimitHint | description: showLimitHint',
      },
    },
    setter: 'BoolSetter',
    description: '是否展现最大长度样式',
  },
  {
    name: 'cutString',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '是否截断',
        en_US: 'Cut Off',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: cutString | 说明: 是否截断超出字符串',
        en_US: 'prop: cutString | description: whether cut off string',
      },
    },
    setter: 'BoolSetter',
    description: '是否截断超出字符串',
  },
  {
    name: 'readOnly',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '是否只读',
        en_US: 'ReadOnly',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: readOnly | 说明: 是否只读',
        en_US: 'prop: readOnly | description: ReadOnly',
      },
    },
    setter: 'BoolSetter',
    description: '是否只读',
  },
  {
    name: 'trim',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '是否 Trim',
        en_US: 'Trim',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: trim | 说明: onChange返回会自动去除头尾空字符',
        en_US: 'prop: trim | description: whether trim when onChange called',
      },
    },
    setter: 'BoolSetter',
  },
  {
    name: 'hasBorder',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '显示边框',
        en_US: 'ShowBorder',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: hasBorder | 说明: 是否有边框',
        en_US: 'prop: hasBorder | description: HasBorder',
      },
    },
    setter: 'BoolSetter',
  },
  {
    name: 'autoFocus',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '自动聚焦',
        en_US: 'Auto Focus',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: autoFocus | 说明: 自动聚焦',
        en_US: 'prop: autoFocus | description: autoFocus',
      },
    },
    setter: 'BoolSetter',
    description: '自动聚焦',
  },
  {
    name: 'hint',
    title: {
      label: {
        type: 'i18n',
        zh_CN: 'Icon 水印',
        en_US: 'IconHint',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: hint | 说明: Icon 水印',
        en_US: 'prop: hint | description: Icon hint',
      },
    },
    setter: {
      componentName: 'IconSetter',
    },
  },
  {
    name: 'innerBefore',
    display: 'block',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '文字前附加内容',
        en_US: 'Inner Before',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: innerBefore | 说明: 文字前附加内容',
        en_US: 'prop: innerBefore | description: innerBefore',
      },
    },
    setter: 'StringSetter',
  },
  {
    name: 'innerAfter',
    display: 'block',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '文字后附加内容',
        en_US: 'Inner After',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: innerAfter | 说明: 文字后附加内容',
        en_US: 'prop: innerAfter | description: innerAfter',
      },
    },
    setter: 'StringSetter',
  },
  {
    name: 'addonBefore',
    display: 'block',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '输入框前附加内容',
        en_US: 'Addon Before',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: addonBefore | 说明: 输入框前附加内容',
        en_US: 'prop: addonBefore | description: addonBefore',
      },
    },
    setter: 'StringSetter',
  },
  {
    name: 'addonAfter',
    display: 'block',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '输入框后附加内容',
        en_US: 'Addon After',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: addonAfter | 说明: 输入框后附加内容',
        en_US: 'prop: addonAfter | description: addonAfter',
      },
    },
    setter: 'StringSetter',
  },
  {
    name: 'addonTextBefore',
    display: 'block',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '输入框前附加文字',
        en_US: 'Text Before',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: addonTextBefore | 说明: 输入框前附加文字',
        en_US: 'prop: addonTextBefore | description: addonTextBefore',
      },
    },
    setter: 'StringSetter',
  },
  {
    name: 'addonTextAfter',
    display: 'block',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '输入框后附加文字',
        en_US: 'Text After',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: addonTextAfter | 说明: 输入框后附加文字',
        en_US: 'prop: addonTextAfter | description: addonTextAfter',
      },
    },
    setter: 'StringSetter',
  },
  {
    type: 'group',
    title: '高级',
    display: 'block',
    items: [
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '唯一标识',
            en_US: 'ID',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: id | 说明: 唯一标识',
            en_US: 'prop: id | description: switch id',
          },
        },
        setter: 'StringSetter',
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '表单标识',
            en_US: 'Name',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: name | 说明: 表单标识',
            en_US: 'prop: name | description: switch name',
          },
        },
        setter: 'StringSetter',
      },
    ],
  },
]);

const meta = {
  componentName: 'FormInput',
  isFormItemComponent: true,
  title: '输入框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormInput',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      style: true,
      events: ['onPressEnter', 'onClear', 'onChange', 'onKeyDown', 'onFocus', 'onBlur'],
    },
  },
  icon: '',
  category: '内容',
};

export default meta;
