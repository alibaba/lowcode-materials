import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const LocoLowcodeExcalidrawMeta: ComponentMetadata = {
  componentName: 'LocoLowcodeExcalidraw',
  title: '绘图工具',
  docUrl: '',
  screenshot: 'https://cdn.itq168.com/img/20230417144641.png?imageView2/0/format/webp/q/50',
  group: '自定义组件',
  category: '编辑器',
  devMode: 'proCode',
  npm: {
    package: 'loco-lowcode-excalidraw',
    version: '0.1.0',
    exportName: 'default',
    main: 'src/index.tsx',
    destructuring: false,
    subName: '',
  },
  configure: {
    props: [
      {
        title: 'data',
        name: 'initialData',
        setter: {
          componentName: 'JsonSetter',
        },
      },
      {
        title: '高度',
        name: 'height',
        setter: {
          componentName: 'StringSetter',
        },
        defaultValue: '600px',
      },
      {
        title: '视图模式',
        name: 'zenModeEnabled',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: true,
      },
      {
        title: '预览模式',
        name: 'viewModeEnabled',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      {
        title: '网格模式',
        name: 'gridModeEnabled',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
      },
      // {
      //   title: '是否保存文件',
      //   name: 'UIOptions.saveToActiveFile',
      //   setter: {
      //     componentName: 'BoolSetter',
      //   },
      //   defaultValue: false,
      // },
      // {
      //   title: '背景颜色',
      //   name: 'viewBackgroundColor',
      //   setter: {
      //     componentName: 'ColorSetter',
      //   },
      //   defaultValue: '#ffffff',
      // },
      {
        title: '滚动模式',
        name: 'scrollToContent',
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      events: ['onChange', 'getSceneElements','ref'],
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '绘图工具',
    screenshot: 'https://cdn.itq168.com/img/20230417144641.png?imageView2/0/format/webp/q/50',
    group: '自定义组件',
    category: '编辑器',
    schema: {
      componentName: 'LocoLowcodeExcalidraw',
      props: {
        initialData: {
          elements: [
            {
              id: 'elh_hfTK6pPkWPaI5XUkM',
              type: 'rectangle',
              x: 629.48828125,
              y: 197.29296875,
              width: 134.9140625,
              height: 84.8828125,
              angle: 0,
              strokeColor: '#000000',
              backgroundColor: 'transparent',
              fillStyle: 'hachure',
              strokeWidth: 1,
              strokeStyle: 'solid',
              roughness: 1,
              opacity: 100,
              groupIds: [],
              roundness: {
                type: 3,
              },
              seed: 872029285,
              version: 13,
              versionNonce: 830187365,
              isDeleted: true,
              boundElements: null,
              updated: 1681713241749,
              link: null,
              locked: false,
            },
            {
              id: 'QIyD-5VH3vH3iS9Li0ama',
              type: 'text',
              x: 680.80859375,
              y: 211.9296875,
              width: 116,
              height: 28,
              angle: 0,
              strokeColor: '#e67700',
              backgroundColor: 'transparent',
              fillStyle: 'hachure',
              strokeWidth: 1,
              strokeStyle: 'solid',
              roughness: 1,
              opacity: 100,
              groupIds: [],
              roundness: null,
              seed: 1929424235,
              version: 40,
              versionNonce: 703708741,
              isDeleted: false,
              boundElements: null,
              updated: 1681713252210,
              link: null,
              locked: false,
              text: 'LOCO低代码',
              fontSize: 20,
              fontFamily: 1,
              textAlign: 'left',
              verticalAlign: 'top',
              baseline: 21,
              containerId: null,
              originalText: 'LOCO低代码',
            },
          ],
          appState: { zenModeEnabled: false, viewBackgroundColor: '#ffffff' },
          scrollToContent: true,
        },
      },
    },
  },
];

export default {
  ...LocoLowcodeExcalidrawMeta,
  snippets,
};
