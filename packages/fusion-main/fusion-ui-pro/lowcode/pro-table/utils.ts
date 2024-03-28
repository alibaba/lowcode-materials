import is from '@sindresorhus/is';

export const uuid = () => Math.random().toString(36).substr(-6);

export const PRO_TABLE_COLUMN_MOCK_VALUES = {
  text: '这是一个文本',
  number: 1234561.231,
  money: 123213.1232,
  date: '2021-08-18 20:52:33',
  phone: '+86 13888888888',
  currency: 'CNY',
  ou: '34',
  percent: 0.64,
  progress: 0.64,
  link: '这是链接',
  tag: '成功',
  textTag: '进行中',
  files: [],
  bankCard: '6226123412341234',
  employee: {
    img: 'https://work.alibaba-inc.com/photo/256512.40x40.jpg',
    staff_id: '256512',
    nickname: '乔勇',
    realname: '石强',
  },
};
export const mockProTableCell = (formatType) => PRO_TABLE_COLUMN_MOCK_VALUES[formatType];

export const mockId = () => `id-${uuid()}`;
export const columnMockValueKey = (formatType) => `_mock_value_${formatType}`;
export const mockProTableRow = (columns: any[]) => {
  return columns
    ?.filter?.((vo) => vo.formatType && vo.dataIndex)
    ?.reduce?.((p, column) => {
      const { formatType, dataIndex } = column;
      const mockValue = column[columnMockValueKey(formatType)];
      p[dataIndex] = is.nullOrUndefined(mockValue) ? mockProTableCell(formatType) : mockValue;
      return p;
    }, {});
};

export const getDataSourceItemSetter = (formatType) => {
  // console.log('formatType: ', formatType);
  let setter;
  switch (formatType) {
    case 'text':
    case 'phone':
    case 'link':
    case 'dialog':
      setter = 'StringSetter';
      break;
    case 'number':
    case 'money':
    case 'percent':
    case 'currency':
    case 'progress':
      setter = 'NumberSetter';
      break;
    case 'date':
      setter = 'DateSetter';
      break;
    default:
      setter = 'StringSetter';
  }
  return setter;
};
