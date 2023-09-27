import snippets from './snippets';
import { IPublicModelSettingField } from '@alilc/lowcode-types';

export default {
  group: '原子组件',
  componentName: 'Tab',
  title: '选项卡',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Tab',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'device',
      propType: {
        type: 'oneOf',
        value: ['tablet', 'desktop', 'phone'],
      },
    },
    {
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['pure', 'wrapped', 'text', 'capsule'],
      },
      description: '外观形态',
      defaultValue: 'pure',
    },
    {
      name: 'animation',
      propType: 'bool',
      description: '是否开启动效',
      defaultValue: true,
    },
    {
      name: 'excessMode',
      propType: {
        type: 'oneOf',
        value: ['slide', 'dropdown'],
      },
      description: '选项卡过多时的滑动模式',
      defaultValue: 'slide',
    },
    {
      name: 'tabPosition',
      propType: {
        type: 'oneOf',
        value: ['top', 'bottom', 'left', 'right'],
      },
      description: '导航选项卡的位置，只适用于包裹型（wrapped）选项卡',
      defaultValue: 'top',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium'],
      },
      description: '尺寸',
      defaultValue: 'medium',
    },
    {
      name: 'triggerType',
      propType: {
        type: 'oneOf',
        value: ['hover', 'click'],
      },
      description: '激活选项卡的触发方式',
      defaultValue: 'click',
    },
    {
      name: 'lazyLoad',
      propType: 'bool',
      description: '是否延迟加载 TabPane 的内容, 默认开启, 即不提前渲染',
      defaultValue: true,
    },
    {
      name: 'unmountInactiveTabs',
      propType: 'bool',
      description: '是否自动卸载未处于激活状态的选项卡',
      defaultValue: false,
    },
    {
      name: 'navClassName',
      propType: 'string',
      description: '导航条的自定义样式类',
    },
    {
      name: 'contentClassName',
      propType: 'string',
      description: '内容区容器的自定义样式类',
    },
    {
      name: 'extra',
      propType: {
        type: 'instanceOf',
        value: 'node',
      },
      description: '导航栏附加内容',
    },
    {
      name: 'onClick',
      propType: 'func',
      description: '点击单个选项卡时触发的回调',
    },
    {
      name: 'onChange',
      propType: 'func',
      description: '选项卡发生切换时的事件回调\n@param {String|Number} key 改变后的 key',
    },
    {
      name: 'onClose',
      propType: 'func',
      description: '选项卡被关闭时的事件回调\n@param {String|Number} key   关闭的选项卡的 key',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        name: 'items',
        title: '标签项',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: '名称',
                      initialValue: '标签项',
                      setter: 'StringSetter',
                      important: true,
                      supportVariable: true,
                    },
                    {
                      name: 'primaryKey',
                      title: '项目编号',
                      condition: () => false,
                      initialValue: (val: string) => {
                        if (val) return val;
                        return String(Math.floor(Math.random() * 10000));
                      },
                      setter: 'StringSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'closeable',
                      title: '可关闭',
                      initialValue: false,
                      important: true,
                      setter: 'BoolSetter',
                      supportVariable: true,
                    },
                    {
                      name: 'disabled',
                      title: '是否禁用',
                      initialValue: false,
                      important: true,
                      setter: 'BoolSetter',
                      supportVariable: true,
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  title: '标签项',
                  closeable: false,
                  disabled: false,
                };
              },
            },
          },
        },
        extraProps: {
          getValue(target: IPublicModelSettingField, value: any) {
            const map = target.node?.children?.map((child) => {
              const primaryKey = child.getPropValue('primaryKey')
                ? String(child.getPropValue('primaryKey'))
                : child.id;
              return {
                primaryKey,
                title: child.getPropValue('title'),
                closeable: child.getPropValue('closeable'),
                disabled: child.getPropValue('disabled'),
              };
            }) || [];
            return map;
          },
          setValue(target: IPublicModelSettingField, value: any) {
            const { node } = target;
            const map: Record<string, any> = {};
            if (!Array.isArray(value)) {
              value = [];
            }
            value.forEach((item: any) => {
              const tabitem = Object.assign({}, item);
              map[item.primaryKey] = tabitem;
            });

            node?.children?.mergeChildren(
              (child) => {
                const primaryKey = String(child.getPropValue('primaryKey'));
                if (Object.hasOwnProperty.call(map, primaryKey)) {
                  child.setPropValue('title', map[primaryKey].title);
                  child.setPropValue('closeable', map[primaryKey].closeable);
                  child.setPropValue('disabled', map[primaryKey].disabled);
                  delete map[primaryKey];
                  return false;
                }
                return true;
              },
              () => {
                const items = [];
                for (const primaryKey in map) {
                  if (Object.hasOwnProperty.call(map, primaryKey)) {
                    items.push({
                      componentName: 'Tab.Item',
                      props: map[primaryKey],
                    });
                  }
                }
                return items;
              },
              (child1, child2) => {
                const a = value.findIndex(
                  (item: any) => String(item.primaryKey) === String(child1.getPropValue('primaryKey')),
                );
                const b = value.findIndex(
                  (item: any) => String(item.primaryKey) === String(child2.getPropValue('primaryKey')),
                );
                return a - b;
              },
            );
          },
        },
      },
      {
        name: 'shape',
        title: '形态',
        defaultValue: 'pure',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              { title: '普通型', value: 'pure' },
              { title: '包裹型', value: 'wrapped' },
              { title: '文本型', value: 'text' },
              { title: '胶囊型', value: 'capsule' },
            ],
          },
        },
      },
      {
        name: 'size',
        title: '尺寸',
        defaultValue: 'medium',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '小', value: 'small' },
              { title: '中', value: 'medium' },
            ],
          },
        },
      },
      {
        name: 'excessMode',
        title: {
          label: '模式',
          tip: '选项卡过多时的查看模式',
        },
        condition: () => false,
        defaultValue: 'slide',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '滑动', value: 'slide' },
              { title: '下拉', value: 'dropdown' },
            ],
          },
        },
      },
      {
        name: 'advance',
        title: '高级',
        type: 'group',
        extraProps: {
          display: 'accordion',
        },
        items: [
          {
            name: 'unmountInactiveTabs',
            title: '切换销毁',
            defaultValue: false,
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'needBadge',
            title: '开启徽标',
            defaultValue: false,
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'renderBadge',
            title: '徽标渲染',
            display: 'block',
            setter: {
              componentName: 'FunctionSetter',
              // props: {
              //   defaultActionName="renderBadge",
              //   defaultCode=`function renderBadge(tabItem) {
              //     //支持返回jsx，返回false或者null时不显示内容，返回字符串"dot"显示红点
              //     return 'dot';
              //   }`,
              // }
            },
            condition(target: IPublicModelSettingField) {
              return target.parent.getPropValue('needBadge') || false;
            },
          },
          {
            name: 'tabRender',
            title: '自定义渲染选项卡',
            display: 'block',
            setter: {
              componentName: 'FunctionSetter',
              // props: {
              //   defaultActionName="renderBadge",
              //   defaultCode=`function renderTabItem(key, props) {
              //     return props.title;
              //   }`,
              // }
            },
          },
          {
            name: 'extraRender',
            title: '渲染导航栏附加内容',
            display: 'block',
            setter: {
              componentName: 'FunctionSetter',
              // props: {
              //   defaultActionName="renderBadge",
              //   defaultCode=`function renderTabExtra() {
              //     return 'Extra';
              //   }`,
              // }
            },
          },
        ],
      },
      {
        name: 'style',
        setter: {
          componentName: 'StyleSetter',
        },
      },
    ],
    supports: {
      events: ['onClick', 'onChange', 'onClose'],
    },
    advanced: {
      initialChildren: [
        {
          componentName: 'Tab.Item',
          props: { primaryKey: 'item1' },
        },
        {
          componentName: 'Tab.Item',
          props: { primaryKey: 'item2' },
        },
      ],
    },
  },
  icon: '',
  category: '信息输入',
  snippets,
};
