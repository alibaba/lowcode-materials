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
    array.push({
      label: item.value,
      value: key,
      disabled: item.state === 'disabled',
      key,
      children: item.children,
    });

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
