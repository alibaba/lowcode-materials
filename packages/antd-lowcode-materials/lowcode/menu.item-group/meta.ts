import { uuid } from '../_utils/utils';
import { itemsExtraProps } from '../menu/utils';

import snippets from './snippets';

export default {
  snippets,
  componentName: 'Menu.ItemGroup',
  title: '菜单组',
  props: [
    {
      name: 'items',
      title: '菜单组项',
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
                    tite: '菜单名',
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
      name: 'children',
      title: { label: '分组的菜单项', tip: '分组的菜单项' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'title',
      title: { label: '分组标题', tip: '分组标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ['Menu', 'Menu.SubMenu'] },
    },
    supports: { style: true },
  },
};
