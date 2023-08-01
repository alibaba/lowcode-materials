import snippets from './snippets.design';
import { getDataFromPlainText } from './adaptor';

export default {
  group: '原子组件',
  componentName: 'Step',
  title: '步骤条',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'Step',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'rtl',
      propType: 'bool',
    },
    {
      name: 'current',
      propType: 'number',
      description: '当前步骤',
      defaultValue: 0,
    },
    {
      name: 'direction',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '展示方向',
      defaultValue: 'hoz',
    },
    {
      name: 'labelPlacement',
      propType: {
        type: 'oneOf',
        value: ['hoz', 'ver'],
      },
      description: '横向布局时( direction 为 hoz )的内容排列',
      defaultValue: 'ver',
    },
    {
      name: 'shape',
      propType: {
        type: 'oneOf',
        value: ['circle', 'arrow', 'dot'],
      },
      description: '类型',
      defaultValue: 'circle',
    },
    {
      name: 'readOnly',
      propType: 'bool',
      description: '是否只读模式',
    },
    {
      name: 'animation',
      propType: 'bool',
      description: '是否开启动效',
      defaultValue: true,
    },
    {
      name: 'className',
      propType: 'string',
      description: '自定义样式名',
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
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '圆圈',
                value: 'circle',
              },
              {
                label: '箭头',
                value: 'arrow',
              },
              {
                label: '点',
                value: 'dot',
              },
            ],
          },
        },
        title: '类型',
        defaultValue: 'circle',
        setValue: (target, value) => {
          if (value === 'dot') {
            target?.parent?.setPropValue?.('labelPlacement', 'ver');
          }
        },
      },
      {
        name: 'direction',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '水平',
                value: 'hoz',
              },
              {
                label: '垂直',
                value: 'ver',
              },
            ],
          },
        },
        title: '方向',
        defaultValue: 'hoz',
        condition: (target) => target?.parent?.getPropValue?.('shape') !== 'arrow',
      },
      {
        name: 'labelPlacement',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '右侧',
                value: 'hoz',
              },
              {
                label: '底侧',
                value: 'ver',
              },
            ],
          },
        },
        title: '内容位置',
        defaultValue: 'ver',
        condition: (target) => target?.parent?.getPropValue?.('shape') === 'circle',
      },
      {
        name: 'style.width',
        title: '宽度',
        condition: (target) => target?.parent?.getPropValue?.('direction') !== 'ver',
        setter: 'NumberSetter',
      },
      // {
      //   name: 'style.height',
      //   title: '高度',
      //   setter: 'NumberSetter'
      // },
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
                      componentName: 'Step.Item',
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
          if (typeof current !== 'undefined') {
            target.parent.setPropValue('current', current);
          }
        },
        setter: {
          componentName: 'MagicEditorSetter',
          props: {
            toolbar: ['normal', 'active', 'disable'],
          },
        },
      },
    ],
  },
  icon: '',
  category: '导航',
  snippets,
};
