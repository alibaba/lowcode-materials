import { hideProp } from '../utils';
import { wrapFormItemProps } from '../utils/form-utils';
import { IComponentDescription } from '../types';

const meta: IComponentDescription = {
  componentName: 'FormDatePicker',
  isFormItemComponent: true,
  title: '日期选择框',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormDatePicker',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    supports: {
      events: ['onChange', 'onOk'],
    },
    props: wrapFormItemProps([
      {
        name: 'label',
        title: {
          label: '标签',
          tip: 'label|表单项内置标签',
        },
        setter: 'StringSetter',
      },
      {
        name: 'state',
        title: {
          label: '状态',
          tip: 'state|表单项状态',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['success', 'loading', 'error'],
          },
        },
      },
      {
        name: 'placeholder',
        title: {
          label: '占位提示',
          tip: 'placeholder|输入提示',
        },
        setter: 'StringSetter',
      },
      {
        name: 'value',
        title: {
          label: 'value',
          tip: 'value|日期值（受控）',
        },
        setter: 'DateSetter',
        condition: hideProp,
      },
      {
        name: 'format',
        title: {
          label: '格式',
          tip: 'format|日期值的格式（用于限定用户输入和展示）',
        },
        setter: 'StringSetter',
        defaultValue: 'YYYY-MM-DD',
      },
      {
        name: 'size',
        title: {
          label: '尺寸',
          tip: 'size|表单项尺寸',
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
        name: 'disabled',
        title: {
          label: '是否禁用',
          tip: 'disabled|是否禁用',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'hasClear',
        title: {
          label: '清除按钮',
          tip: 'hasClear|是否显示清空按钮',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'followTrigger',
        setter: 'BoolSetter',
        title: '跟随滚动',
      },
      {
        name: 'defaultValue',
        title: {
          label: '默认值',
          tip: 'defaultValue|初始日期值，moment 对象',
        },
        setter: 'DateSetter',
      },
      {
        name: 'form',
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
    ]),
  },
  icon: '',
  category: '内容',
};

export default meta;
