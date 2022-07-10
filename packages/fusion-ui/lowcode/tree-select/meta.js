import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormTreeSelect',
  isFormItemComponent: true,
  title: '树型选择控件',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormTreeSelect',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: wrapFormItemProps([
      {
        name: 'placeholder',
        title: {
          label: '占位提示',
          tip: '属性: placeholder',
        },
        defaultValue: '请选择', // 不生效
        setter: 'StringSetter',
      },
      {
        name: 'hasClear',
        title: {
          label: '清除按钮',
          tip: '属性: hasClear',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'showSearch',
        title: {
          label: '可搜索',
          tip: '属性: showSearch',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'label',
        title: '内联文案',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'dataSource',
        title: {
          label: '节点数据',
          tip: '数据源',
        },
        setter: 'JsonSetter',
      },
    ]),
  },
  icon: '',
  category: '内容',
};
