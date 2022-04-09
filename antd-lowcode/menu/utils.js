import { uuid } from '../_utils/utils';

export const itemsExtraProps = {
  getValue(target, fieldValue) {
    const map = target.node.children.map((child) => {
      const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
      const result = {
        key,
        category: child.componentName,
      };
      ['children', 'items', 'title'].forEach((propKey) => {
        if (child.getPropValue(propKey)) {
          result[propKey] = child.getPropValue(propKey);
        }
      });
      return result;
    });
    return map.length === 0 ? fieldValue : map;
  },
  setValue(target, value) {
    const { node } = target;
    const map = {};

    if (!Array.isArray(value)) {
      value = [];
    }
    value.forEach((item) => {
      const tabItem = Object.assign({}, item);
      map[item.key] = tabItem;
    });
    node.children.mergeChildren(
      (child) => {
        const key = String(child.getPropValue('key'));

        if (
          Object.hasOwnProperty.call(map, key) &&
          child.componentName.includes(map[key].category)
        ) {
          if (map[key].category === 'Menu.Item') {
            child.setPropValue('children', map[key].children);
          } else {
            child.setPropValue('title', map[key].title || map[key].children);
          }
          delete map[key];
          return false;
        }
        return true;
      },
      () => {
        const items = [];
        for (const key in map) {
          const itemProps = map[key];

          if (Object.hasOwnProperty.call(map, key)) {
            if (itemProps.category === 'Menu.Item') {
              items.push({
                componentName: 'Menu.Item',
                props: {
                  key: itemProps.key,
                  children: itemProps.children,
                },
              });
            } else {
              items.push({
                componentName: 'Menu.SubMenu',
                props: {
                  key: itemProps.key,
                  title: itemProps.title || itemProps.children,
                  items:
                    itemProps.items && itemProps.items.length === 0
                      ? itemProps.items
                      : [
                          {
                            key: `item-${uuid()}`,
                            category: 'Menu.Item',
                            children: '子菜单名',
                          },
                        ],
                },
              });
            }
          }
        }
        return items;
      },
      (child1, child2) => {
        const a = value.findIndex(
          (item) => String(item.key) === String(child1.getPropValue('key')),
        );
        const b = value.findIndex(
          (item) => String(item.key) === String(child2.getPropValue('key')),
        );
        return a - b;
      },
    );
  },
};
