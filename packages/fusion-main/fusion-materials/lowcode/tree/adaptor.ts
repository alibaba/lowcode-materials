export const createDataSource = (
  list,
  keys = { selected: [], expanded: [] },
  level = 0,
  prefix = '',
) => {
  const array = [];
  let index = 0;

  list.forEach((item) => {
    const key = `${prefix || level}-${index++}`;

    if (item.children && item.children.length > 0) {
      item.children = createDataSource(item.children, keys, level + 1, key);
    }
    if (typeof Array.isArray(item.value) && item.value.length) {
      let _label, _icon;
      item.value.forEach((i) => {
        if (i.type === 'icon') {
          _icon = i.value;
        } else {
          _label = i.value;
        }
      });
      array.push({
        label: _label,
        icon: _icon,
        disabled: item.state === 'disabled',
        key,
        children: item.children,
      });
    } else {
      array.push({
        label: item.value,
        disabled: item.state === 'disabled',
        key,
        children: item.children,
      });
    }

    if (item.state === 'active') {
      if (item.children && item.children.length > 0) {
        keys.expanded.push(key);
      } else {
        keys.selected.push(key);
      }
    }

    return;
  });

  return array;
};
