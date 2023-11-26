let index = 1000;
export const createDataSource = (list, map = {}) => {
  if (!list) return [];
  return list
    .filter((item) => item.type === 'node')
    .map(({ value, children, state }) => {
      const key = String(index++);
      if (state === 'active') {
        if (!children || children.length === 0) {
          map.selected.push(key);
        } else {
          map.expanded.push(key);
        }
      }

      return {
        value: key,
        label: value,
        disabled: state === 'disabled',
        children: createDataSource(children, map),
      };
    });
};
