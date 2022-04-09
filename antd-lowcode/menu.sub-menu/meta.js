import { uuid } from '../_utils/utils';
import { itemsExtraProps } from '../menu/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Menu.SubMenu',
  title: '子菜单',
  props: [
    {
      name: 'items',
      title: '子菜单项',
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'key',
                    title: 'key',
                    setter: 'StringSetter',
                    initialValue: (val) => val || uuid(),
                  },
                  {
                    name: 'children',
                    title: '子菜单名',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'category',
                    title: {
                      label: '类型',
                      tip: '菜单项类型',
                    },
                    propType: {
                      type: 'oneOf',
                      value: ['Menu.Item', 'Menu.SubMenu', 'Menu.ItemGroup'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'Item',
                              value: 'Menu.Item',
                            },
                            {
                              title: 'SubMenu',
                              value: 'Menu.SubMenu',
                            },
                            {
                              title: 'ItemGroup',
                              value: 'Menu.ItemGroup',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: `item-${uuid()}`,
                category: 'Menu.Item',
                children: '子菜单名',
              };
            },
          },
        },
      },
      extraProps: itemsExtraProps,
    },
    {
      name: 'danger',
      title: { label: '错误状态', tip: '展示错误状态样式' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'icon',
      title: { label: '菜单图标', tip: '菜单图标' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
      defaultValue: false,
    },
    {
      name: 'key',
      title: { label: '唯一标志', tip: 'item 的唯一标志' },
      propType: 'string',
    },
    {
      name: 'title',
      title: {
        label: '悬浮标题',
        tip: '设置收缩时展示的悬浮标题',
      },
      propType: 'string',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ['Menu'] },
    },
    supports: { style: true },
  },
};
