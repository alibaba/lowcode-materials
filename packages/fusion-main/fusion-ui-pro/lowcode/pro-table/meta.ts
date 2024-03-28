import { IAssets } from '../types/index';
import { proTableMeta } from './pro-table-meta';

const meta: IAssets = {
  components: [
    proTableMeta,
    {
      componentName: 'ProTableSlot',
      title: '表格槽位',
      docUrl: '',
      screenshot: '',
      devMode: 'proCode',
      npm: {
        package: '@alifd/fusion-ui',
        version: '1.0.24-21',
        exportName: 'ProTableSlot',
        main: 'lib/index.js',
        destructuring: true,
        subName: '',
      },
      props: [
        {
          name: 'position',
          propType: {
            type: 'oneOf',
            isRequired: true,
            value: [
              'actionBarLeft',
              'actionBarRight',
              'actionBarBefore',
              'actionBarAfter',
              'table',
            ],
          },
          description: '位置',
        },
      ],
    },
  ],
};

export default meta;
