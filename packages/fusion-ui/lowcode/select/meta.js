import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormSelect',
  isFormItemComponent: true,
  title: '选择器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormSelect',
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
        name: 'dataSource',
        display: 'block',
        title: '选项',
        tip: {
          title: '数据格式',
          url: '',
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'ObjectSetter',
                    props: {
                      config: {
                        items: [
                          {
                            name: 'label',
                            title: 'label',
                            setter: 'StringSetter',
                          },
                          {
                            name: 'value',
                            title: 'value',
                            setter: 'StringSetter',
                          },
                        ],
                      },
                    },
                    initialValue: {
                      title: 'Title',
                    },
                  },
                },
              },
              'ExpressionSetter',
            ],
          },
        },
      },
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
              { value: 'tag', title: '标签' },
            ],
          },
        },
      },

      {
        type: 'group',
        title: '其他配置',
        display: 'block',
        items: [
          {
            name: 'notFoundContent',
            title: {
              label: '空文案',
              tip: 'notFoundContent|弹层内容为空的文案',
            },
            setter: 'StringSetter',
          },
          {
            name: 'hasBorder',
            title: {
              label: '边框',
              tip: '是否有边框',
            },
            setter: 'BoolSetter',
          },
          {
            name: 'autoWidth',
            title: '下拉等宽',
            setter: 'BoolSetter',
          },
          {
            name: 'hasArrow',
            title: '下拉箭头',
            setter: 'BoolSetter',
            defaultValue: true,
          },
        ],
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
    ]),
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
  category: '内容',
};
