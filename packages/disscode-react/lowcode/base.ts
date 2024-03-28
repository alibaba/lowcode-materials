import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

export const NodeChildrenSetterConfig: IPublicTypeFieldConfig = {
  title: {
    label: {
      type: 'i18n',
      'en-US': 'children',
      'zh-CN': '子节点',
    },
  },
  name: 'children',
  description: '子节点',
  display: 'block',
  setter: {
    componentName: 'SlotSetter',
  },
};

export const ViewStyleSetterConfig: IPublicTypeFieldConfig = {
  title: {
    label: {
      type: 'i18n',
      'en-US': 'style',
      'zh-CN': '样式',
    },
  },
  name: 'style',
  description: '样式',
  display: 'block',
  setter: {
    componentName: 'StyleSetter',
    props: {
      showModuleList: ['background', 'border', 'layout', 'position'],
    },
  },
};

export const getStyleSetterConfig: (
  name: string,
  title?: string,
  type?: 'view' | 'text',
) => IPublicTypeFieldConfig = (name, title, type) => {
  return {
    title: {
      label: {
        type: 'i18n',
        'en-US': 'style',
        'zh-CN': title,
      },
    },
    name: name,
    display: 'block',
    setter: {
      componentName: 'StyleSetter',
      props: {
        showModuleList:
          type === 'text'
            ? ['font', 'layout', 'position']
            : ['background', 'border', 'layout', 'position'],
      },
    },
  };
};

export const ConditionStyleSetterConfig: IPublicTypeFieldConfig = {
  title: {
    label: {
      type: 'i18n',
      'en-US': 'style',
      'zh-CN': '动态样式',
    },
  },
  name: 'inlineStyle',
  description: '动态样式',
  display: 'block',
  setter: {
    componentName: 'ArraySetter',
    props: {
      itemSetter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'enable',
                title: '可用',
                setter: 'BoolSetter',
              },
              {
                name: 'name',
                title: '样式名',
                setter: 'StringSetter',
                isRequired: true,
              },
              {
                name: 'style',
                title: '样式',
                setter: 'StyleSetter',
                display: 'block',
                isRequired: false,
              },
            ],
          },
        },
        initialValue: () => {
          return {
            enable: true,
            name: '动态样式1',
            style: {},
          };
        },
      },
    },
  },
};
