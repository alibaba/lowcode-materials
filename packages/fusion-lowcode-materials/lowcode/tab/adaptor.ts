import parseData from '../utils/parse-data';

export const createDataSource = (data: any, props) => {
  const list = parseData(data, { parseContent: true });
  const dataSource = [];
  list.forEach((item, index) => {
    const { value = '' } = item.value.find(({ type }) => type === 'icon') || {};
    dataSource.push({
      icon: value,
      key: `tab_item_${index}`,
      title: {
        type: 'JSSlot',
        value: item.value.map(({ type, value }) => {
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
      disabled: item.state === 'disabled',
    });

    if (item.state === 'active') {
      props.current = `tab_item_${index}`;
    }
  });
  return dataSource;
};

function createContents(dataSource) {
  //dataSouce.map(item => <Step.Item key={item.key} title={item.title} content={item.content} icon={item.icon} percent={item.percent} disabled={item.disabled}/>)
  return dataSource.map((item) => {
    return {
      componentName: 'Tab.Item',
      props: item,
    };
  });
}

export function getDataFromPlainText(value) {
  const props = { current: `tab_item_0` };
  const dataSource = createDataSource(value, props);
  const children = createContents(dataSource);
  return { children, ...props };
}

// export default {
//     name: 'Tab',
//     shape: ['pure', 'wrapped', 'text', 'capsule'],
//     editor: (shape = 'pure') => {
//         const props = [{
//             name: 'size',
//             type: Types.enum,
//             options: ['medium', 'small'],
//             default: 'medium'
//         }, {
//             name: 'closable',
//             type: Types.bool,
//             default: false
//         }];

//         if (['pure', 'wrapped', 'text'].indexOf(shape) !== -1) {
//             props.push({
//                 name: 'overflow',
//                 label: 'Overflow Indicator',
//                 type: Types.enum,
//                 options: ['slide', 'dropdown'],
//                 default: 'slide'
//             });
//             props.push({
//                 name: 'width',
//                 type: Types.number,
//                 default: 480
//             });
//         }

//         if (shape === 'wrapped') {
//             props.splice(props.length - 2, 0, {
//                 name: 'position',
//                 type: Types.enum,
//                 options: ['top', 'left', 'right'],
//                 default: 'top'
//             });
//         }

//         return {
//             props,
//             data: {
//                 active: true,
//                 disable: true,
//                 default: 'Tab 1\n*Tab 2\nTab 3'
//             }
//         };
//     },
//     adaptor: ({ shape, size, closable, overflow, width, position, style = {}, data, ...others }) => {
//         const list = parseData(data, { parseContent: true });
//         const activeKey = list.findIndex((item) => item.state === 'active');

//         return (
//             <Tab {...others} style={{ minWidth: style.width ? 0 : width, ...style }} activeKey={activeKey} shape={shape} size={size} excessMode={overflow} tabPosition={position}>
//                 {
//                     list.map((item, index) => <Tab.Item key={index} title={item.value.map(({ type, value }, i) => type === 'icon' ? <Icon key={`icon_${i}`} type={value} /> : value)} closeable={closable} disabled={item.state === 'disabled'} />)
//                 }
//             </Tab>
//         );
//     }
// };
