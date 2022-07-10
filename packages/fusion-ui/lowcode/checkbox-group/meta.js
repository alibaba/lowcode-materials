import { wrapFormItemProps } from '../utils/form-utils';

export default {
  componentName: 'FormCheckboxGroup',
  isFormItemComponent: true,
  title: '复选按钮组',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/fusion-ui',
    version: '{{version}}',
    exportName: 'FormCheckboxGroup',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: wrapFormItemProps([
      {
        name: 'disabled',
        title: '是否禁用',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'itemDirection',
        title: '排列方式',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '水平排列', value: 'hoz' },
              { title: '垂直排列', value: 'ver' },
            ],
          },
        },
        defaultValue: 'hoz',
      },
      {
        name: 'isPreview',
        title: '预览态',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'defaultValue',
        title: '默认值',
        defaultValue: '[]',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['JsonSetter', 'ExpressionSetter'],
          },
        },
      },
      {
        name: 'dataSource',
        display: 'block',
        title: '选项',
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
                      label: '选项一',
                      value: '1',
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
      // {
      //   name: "renderPreview",
      //   title: "预览态模式下渲染的内容",
      //   display: "block",
      //   setter: {
      //     componentName: "FunctionSetter"
      //   },
      //   condition(target) {
      //     return target.getProps().getPropValue("isPreview") || false;
      //   }
      // }
    ]),
    supports: {
      style: true,
      events: ['onChange'],
    },
    advanced: {
      initials: [
        {
          name: 'dataSource',
          initial: () => {
            return [
              {
                label: '选项一',
                value: '1',
              },
              {
                label: '选项二',
                value: '2',
              },
              {
                label: '选项三',
                value: '3',
              },
            ];
          },
        },
      ],
    },
  },
  icon: '',
  category: '内容',
};
