import snippets from './snippets.design';
import parseData from '../utils/parse-data';

export default {
  group: '原子组件',
  componentName: 'Select',
  title: '选择器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
    version: '{{version}}',
    exportName: 'Select',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    component: {
      rootSelector: 'span.next-select',
    },
    props: [
      {
        name: 'mode',
        title: {
          label: '模式',
          tip: '属性: mode',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            defaultValue: 'single',
            options: [
              { value: 'single', title: '单选' },
              { value: 'multiple', title: '多选' },
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
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 按钮尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '小',
                value: 'small',
              },
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'visible',
        title: {
          label: '状态',
          tip: '属性: visible',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            defaultValue: 'single',
            options: [
              { value: false, title: '普通' },
              { value: true, title: '展开' },
            ],
          },
        },
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
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '无',
                value: false,
              },
              {
                label: '有',
                value: true,
              },
            ],
          },
        },
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
        setValue: (target) => {
          const visible = target.parent.getPropValue('visible');
          if (!visible) return;
          target.parent.setPropValue('visible', false);
          setTimeout(() => {
            target.parent.setPropValue('visible', true);
          }, 300);
        },
      },
      {
        name: 'label',
        title: {
          label: '内联文案',
          tip: 'label|输入框内置标签',
        },
        setter: 'StringSetter',
      },
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
        name: 'showSearch',
        title: {
          label: '可搜索',
          tip: '属性: showSearch',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'plainData',
        display: 'block',
        title: '选项',
        tip: {
          title: '数据',
          url: '',
        },
        setValue: (target, value) => {
          const list = parseData(value).filter(({ type }) => 'node' === type);
          const dataSource = [];
          const _value = [];

          list.forEach((item, index) => {
            dataSource.push({
              label: item.value,
              value: index,
              disabled: item.state === 'disabled',
            });
            if (item.state === 'active') {
              _value.push(index);
            }
          });
          target.parent.setPropValue('dataSource', dataSource);
          target.parent.setPropValue('value', _value);
        },
        setter: {
          componentName: 'MagicEditorSetter',
          props: {
            toolbar: ['normal', 'active', 'disable'],
            disableIcon: true,
          },
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          propType: 'func',
          description: '值发生变化',
        },
        {
          name: 'onVisibleChange',
          propType: 'func',
          description: '弹层显示隐藏变化',
        },
        {
          name: 'onRemove',
          propType: 'func',
          description: 'Tag 被删除',
        },
        {
          name: 'onSearch',
          propType: 'func',
          description: '搜索',
        },
      ],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
