import parseData from '../utils/parse-data';

export const createDataSource = (
  list,
  keys = { selected: [], expanded: {} },
  level = 0,
  prefix = '',
) => {
  const array = [];
  let group = [];
  let grouping = false;
  let index = 0;

  list.forEach((item) => {
    switch (item.type) {
      // eslint-disable-next-line no-case-declarations
      case 'node':
        const key = `${prefix || level}-${index++}`;

        if (item.children && item.children.length > 0) {
          item.children = createDataSource(item.children, keys, level + 1, key);
        }

        if (grouping) {
          group.push({
            ...item,
            key,
          });
        } else {
          array.push({
            ...item,
            key,
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
      case 'comment':
        if (group.length > 0) {
          array.push({
            type: 'group',
            value: grouping,
            children: group,
            key: `${prefix || level}-${index++}`,
          });
          group = [];
        }
        grouping = item.value;
        return;
      case 'divider':
        if (group.length > 0) {
          array.push({
            type: 'group',
            value: grouping,
            children: group,
            key: `${prefix || level}-${index++}`,
          });
          group = [];
        }
        grouping = false;
        array.push({
          type: 'divider',
          key: `${prefix || level}-${index++}`,
        });

      default:
    }
  });

  if (group.length > 0) {
    array.push({
      type: 'group',
      value: grouping,
      children: group,
      key: `${prefix || level}-${index++}`,
    });
    group = [];
  }

  return array;
};

const createMenuItem = (item) => {
  if (item.children.length > 0) {
    // return (
    //   <Menu.SubMenu key={item.key} disabled={item.state === 'disabled'} label={item.value ? item.value.filter(({ type }) => type === ContentType.text).map(({ value }) => value).join('') : ''}>
    //     {createContents(item.children)}
    //   </Menu.SubMenu>
    // );
    return {
      componentName: 'SubMenu',
      props: {
        key: item.key,
        disabled: item.state === 'disabled',
        label: item.value
          ? item.value
              .filter(({ type }) => type === 'text')
              .map(({ value }) => value)
              .join('')
          : '',
      },
      children: createContents(item.children),
    };
  }

  // return <Menu.Item key={item.key} checked={item.state === 'active'} disabled={item.state === 'disabled'} children={item.value.map(({ type, value }, index) => type === 'icon' ? <Icon key={`icon_${index}`} type={value} size="small" style={{ marginRight: '4px' }} /> : value)} />;
  return {
    componentName: 'Menu.Item',
    props: {
      key: item.key,
      checked: item.state === 'active',
      disabled: item.state === 'disabled',
    },
    children: item.value.map(({ type, value }, index) =>
      type === 'icon'
        ? {
            componentName: 'Icon',
            props: {
              disabled: true,
              key: `icon_${index}`,
              type: value,
              size: 'small',
              style: { marginRight: '4px' },
            },
          }
        : {
            componentName: 'Typography.Text',
            props: {
              children: value,
              style: {
                color: 'inherit',
              },
            },
          },
    ),
  };
};

export const createContents = (array = []) => {
  return array.map((item) => {
    if (item.type === 'group' && item.children.length > 0) {
      // return <Menu.Group key={item.key} label={item.value}>{item.children.map(it => createMenuItem(it))}</Menu.Group>;
      return {
        componentName: 'Menu.Group',
        props: {
          key: item.key,
          label: item.value,
        },
        children: item.children.map((it) => createMenuItem(it)),
      };
    }

    if (item.type === 'divider') {
      // return <Menu.Divider key={item.key}/>;
      return {
        componentName: 'Menu.Divider',
        props: {
          key: item.key,
        },
      };
    }

    return createMenuItem(item);
  });
};

function getButtonLabel(buttonItem) {
  if (buttonItem.type !== 'node') return {};
  // return buttonItem.value.find(item => item.type === 'text').value;
  // FIXME: 渲染时 JSSlot 有问题，暂时不要 icon
  return {
    label: {
      type: 'JSSlot',
      value: buttonItem.value.map(({ type, value }) => {
        if (type === 'icon')
          return {
            componentName: 'Icon',
            props: {
              disabled: true,
              type: value,
              size: 'small',
              style: { marginRight: '4px' },
            },
          };
        return {
          componentName: 'Typography.Text',
          props: {
            children: value,
            style: {
              color: 'inherit',
            },
          },
        };
      }),
    },
    disabled: buttonItem?.state === 'disabled',
  };
}

export function getDataFromPlainText(value) {
  const keys = { selected: [], expanded: [] };
  const list = parseData(value, { parseContent: true });
  const buttonItem = list[0] ? list[0] : { value: [] };
  const { label, disabled } = getButtonLabel(buttonItem);
  const dataSource = createDataSource(list[0] ? list[0].children : [], keys);
  const children = createContents(dataSource);
  return { label, disabled, children, selectedKeys: keys.selected };
}

// const _propsValue = ({ shape, level, size, data, ...others}) =>{
//   const list = parseData(data, { parseContent: true });
//   const buttonItem = list[0] ? list[0] : { value: []};
//   const keys = { selected: [], expanded: [] };
//   if (buttonItem.type !== 'node') return null;
//   const label = buttonItem.value.map(({ type, value}) => {
//     if (type === 'icon') return <Icon type={value} />;
//     return value;
//   });

//   return {
//     ...others,
//     size,
//     disabled: buttonItem.state === 'disabled',
//     visible: buttonItem.state === 'active',
//     type: shape === 'ghost' ? 'normal' : level,
//     popupProps: { needAdjust: false, container: node => node },
//     ghost: shape === 'ghost' ? level : false,
//     selectMode: "multiple",
//     menuProps: { openKeys: keys.expanded, style: { textAlign: 'left' } },
//     selectedKeys: keys.selected,
//     label: label
//   };
// };
// export default {
//     name: 'SplitButton',
//     shape: ['normal', 'ghost'],
//     editor: (shape = 'normal') => ({
//         props: [{
//             name: 'level',
//             type: Types.enum,
//             options: shape === 'ghost' ? ['light', 'dark'] : ['normal', 'primary', 'secondary'],
//             default: shape === 'ghost' ? 'light' : 'normal',
//         }, {
//             name: 'size',
//             type: Types.enum,
//             options: ['large', 'medium', 'small'],
//             default: 'medium'
//         }],
//         data: {
//             icon: true,
//             active: true,
//             disable: true,
//             default: 'Edit Document\n\tUndo\n\t*Redo\n\tCut\n\tCopy\n\tPaste'
//         }
//     }),
//     propsValue: _propsValue,
//     adaptor: (args) => {
//         const list = parseData(args.data, { parseContent: true });
//         const keys = { selected: [], expanded: [] };
//         const dataSouce = createDataSource(list[0] ? list[0].children : [], keys);
//         const props = _propsValue(args);
//         return (
//             <SplitButton
//                 {...props}
//             >
//                 {createContents(dataSouce)}
//             </SplitButton>
//         );
//     },
//     demoOptions: (demo) => {
//         const { node = { props: {} } } = demo;
//         const { level, data } = node.props;
//         if (data.indexOf('*') === 0) {
//             demo = {
//                 ...demo,
//                 height: 250
//             };
//         }

//         if (level === 'dark') {
//             demo = {
//                 ...demo,
//                 background: '#333'
//             };
//         } else if(level === 'light') {
//             demo = {
//                 ...demo,
//                 background: 'rgb(235, 236, 240)',
//             };
//         }

//         return demo;
//     }
// };
