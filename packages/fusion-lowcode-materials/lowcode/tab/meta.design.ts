import snippets from './snippets';
import { getDataFromPlainText } from './adaptor';

export default {
  group: '原子组件',
  componentName: 'Tab',
  title: '选项卡',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alifd/next',
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
      isMinimalRenderUnit: true,
    },
    props: [
      {
        name: 'shape',
        title: '类型',
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
        name: 'closeable',
        title: '关闭入口',
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
        name: 'excessMode',
        title: '超出模式',
        defaultValue: 'slide',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '左右滑动', value: 'slide' },
              { title: '下拉', value: 'dropdown' },
            ],
          },
        },
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'plainData',
        display: 'block',
        title: '内容',
        setValue: (target, value) => {
          const { children, current } = getDataFromPlainText(value);
          if (children) {
            const map = {};
            children.forEach((item) => {
              const { props } = item;
              map[props.key] = props;
            });
            // target.parent.setPropValue('children', children);
            const _children = target.node.export().children;
            target.node.children.mergeChildren(
              (child) => {
                const primaryKey = String(child.getPropValue('key'));
                return Object.hasOwnProperty.call(map, primaryKey);
              },
              () => {
                const items = [];
                for (const key in map) {
                  const originChild = _children.find((child) => {
                    const found = child.props.key === key;
                    return found;
                  }) || { children: [] };
                  if (Object.hasOwnProperty.call(map, key)) {
                    items.push({
                      componentName: 'Tab.Item',
                      props: map[key],
                      children: originChild.children,
                    });
                  }
                }
                return items;
              },
              (child1, child2) => {
                const a = children.findIndex(
                  (item) => String(item.props.key) === String(child1.getPropValue('key')),
                );
                const b = children.findIndex(
                  (item) => String(item.props.key) === String(child2.getPropValue('key')),
                );
                return a - b;
              },
            );
          }
          const currentShape = target.parent.getPropValue('shape');
          target.parent.setPropValue('shape', '');
          target.parent.setPropValue('shape', currentShape);
          if (typeof current !== 'undefined') {
            // target.parent.setPropValue('activeKey', current);
          }
        },
        setter: {
          componentName: 'MagicEditorSetter',
          props: {
            toolbar: ['normal', 'disable'],
          },
        },
      },
    ],
    supports: {
      events: ['onClick', 'onChange', 'onClose'],
    },
  },
  experimental: {
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
  icon: '',
  category: '导航',
  snippets,
};
