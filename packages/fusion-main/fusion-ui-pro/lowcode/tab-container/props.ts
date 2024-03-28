export default [
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
                  defaultValue: '标签项',
                  important: true,
                  setter: 'StringSetter',
                },
                // {
                //   name: 'defaultActiveKey',
                //   title: 'defaultActiveKey',
                //   defaultValue: '默认key',
                //   important: true,
                //   setter: 'StringSetter',
                // },
                {
                  name: 'primaryKey',
                  title: '项目编号',
                  condition: () => false,
                  setter: 'StringSetter',
                },
                {
                  name: 'closeable',
                  title: '可关闭',
                  initialValue: false,
                  setter: 'BoolSetter',
                },
                {
                  name: 'disabled',
                  title: '是否禁用',
                  initialValue: false,
                  setter: 'BoolSetter',
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
      getValue(target) {
        const map = target.node.children.map((child) => {
          const primaryKey = child.getPropValue('primaryKey')
            ? String(child.getPropValue('primaryKey'))
            : child.id;
          return {
            primaryKey,
            title: child.getPropValue('title') || '标签项',
            closeable: child.getPropValue('closeable'),
            disabled: child.getPropValue('disabled'),
          };
        });
        return map;
      },
      setValue(target, value) {
        const { node } = target;
        const map = {};
        if (!Array.isArray(value)) {
          value = [];
        }
        value.forEach((item) => {
          const tabitem = Object.assign({}, item);
          map[item.primaryKey] = tabitem;
        });

        node.children.mergeChildren(
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
              (item) => String(item.primaryKey) === String(child1.getPropValue('primaryKey')),
            );
            const b = value.findIndex(
              (item) => String(item.primaryKey) === String(child2.getPropValue('primaryKey')),
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
      componentName: 'RadioGroupSetter',
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
    name: 'tabPosition',
    title: '选项卡位置',
    defaultValue: 'top',
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          { title: '顶部', value: 'top' },
          { title: '下面', value: 'bottom' },
          { title: '左边', value: 'left' },
          { title: '右边', value: 'right' },
        ],
      },
    },
  },
  {
    name: 'lazyLoad',
    title: '延时加载',
    defaultValue: 'top',
    setter: 'BoolSetter',
  },
  {
    name: 'triggerType',
    title: '触发方式',
    defaultValue: 'click',
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          { title: '触摸', value: 'hover' },
          { title: '点击', value: 'click' },
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
    title: '选项卡过多时的滑动模式',
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
    name: 'tabPosition',
    title: {
      label: '导航选项卡的位置',
      tip: '只适用于包裹型（wrapped）选项卡',
    },
    condition: (target) => {
      const shape = target.getProps().getPropValue('shape');
      return shape === 'wrapped';
    },
    defaultValue: 'top',
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: [
          {
            title: '顶部',
            value: 'top',
          },
          {
            title: '底部',
            value: 'bottom',
          },
          {
            title: '左边',
            value: 'left',
          },
          {
            title: '右边',
            value: 'right',
          },
        ],
      },
    },
  },
];
