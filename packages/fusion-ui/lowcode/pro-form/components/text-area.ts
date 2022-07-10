import { IProps } from '../../types';
import { wrapFormItemProps } from '../../utils/form-utils';

const props: IProps[] = wrapFormItemProps([
  {
    name: 'rows',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '行数',
        en_US: 'Rows',
      },
      tip: {
        type: 'i18n',
        zh_CN:
          '属性: rows | 说明: 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)',
        en_US: 'prop: rows | description: row numbers',
      },
    },
    setter: 'NumberSetter',
    supportVariable: true,
    defaultValue: 4,
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
    supportVariable: true,
    description: '最大长度',
  },
  {
    name: 'placeholder',
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
    supportVariable: true,
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
        zh_CN: '属性: state | 说明: 状态\n@enumdesc 错误',
        en_US: 'prop: state | description: input state',
      },
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: ['error', 'warning'],
      },
    },
  },
  {
    name: 'autoHeight',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '自动高度',
        en_US: 'Auto Height',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: autoHeight | 说明: 自动高度 true / {minRows: 2, maxRows: 4}',
        en_US: 'prop: autoHeight | description: auto height',
      },
    },
    setter: 'BoolSetter',
    supportVariable: true,
    defaultValue: false,
  },
  {
    name: 'isPreview',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '预览态',
        en_US: 'Preview',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: isPreview | 说明: 是否为预览态',
        en_US: 'prop: isPreview | description: preview',
      },
    },
    setter: 'BoolSetter',
    supportVariable: true,
    defaultValue: false,
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
    supportVariable: true,
    description: '是否禁用',
  },
  {
    name: 'hasLimitHint',
    title: {
      label: {
        type: 'i18n',
        zh_CN: '展示限制',
        en_US: 'ShowLimit',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: hasLimitHint | 说明: 是否展现最大长度样式',
        en_US: 'prop: hasLimitHint | description: hasLimitHint',
      },
    },
    setter: 'BoolSetter',
    supportVariable: true,
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
    supportVariable: true,
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
    supportVariable: true,
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
    supportVariable: true,
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
    supportVariable: true,
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
    supportVariable: true,
    description: '自动聚焦',
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
        supportVariable: true,
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
        supportVariable: true,
      },
    ],
  },
]);

const meta = {
  componentName: 'FormTextArea',
  isFormItemComponent: true,
  title: '多行文本框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormTextArea',
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
