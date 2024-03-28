import { FieldConfig } from '@ali/lowcode-types';

const props: FieldConfig[] = [
  {
    name: 'title',
    title: '标题',
    setter: 'StringSetter',
  },
  {
    name: 'subTitle',
    title: '子标题',
    setter: 'StringSetter',
  },
  {
    name: 'backIcon',
    title: '返回图标',
    setter: {
      componentName: 'IconSetter',
    },
  },
  {
    name: 'showAvatar',
    title: '头像',
    setValue: (target, value) => {
      return target.getProps().setPropValue('avatar', value || null);
    },
    setter: {
      componentName: 'BoolSetter',
    },
  },
  {
    name: 'showBreadcrumb',
    title: '面包屑',
    setValue: (target, value) => {
      return target.getProps().setPropValue('breadcrumb', value ? ['首页', '列表'] : null);
    },
    defaultValue: true,
    setter: {
      componentName: 'BoolSetter',
    },
  },
  {
    name: 'showActions',
    title: '操作区',
    defaultValue: false,
    setter: {
      componentName: 'BoolSetter',
    },
  },
  {
    name: 'avatar',
    type: 'group',
    display: 'accordion',
    condition: (target) => {
      const _avatar = target.getProps().getPropValue('showAvatar');
      return !!_avatar;
    },
    title: {
      label: '头像',
    },
    items: [
      {
        name: 'avatar.icon',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '图标',
            en_US: 'Icon',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: icon | 说明: 图标类型',
            en_US: 'prop: icon | description: icon type',
          },
        },
        setter: {
          componentName: 'IconSetter',
        },
      },
      {
        name: 'avatar.children',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '文本内容',
            en_US: 'Content',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: children | 说明: 文本内容',
            en_US: 'prop: children | description: avatar content',
          },
        },
        setter: 'StringSetter',
      },
      {
        name: 'avatar.size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '头像尺寸',
            en_US: 'Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 头像的大小',
            en_US: 'prop: size | description: avatar size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['small', 'medium', 'large'],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'avatar.shape',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '头像形状',
            en_US: 'Shape',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: shape | 说明: 头像的形状',
            en_US: 'prop: shape | description: avatar shape',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['circle', 'square'],
          },
        },
        defaultValue: 'circle',
      },
      {
        name: 'avatar.src',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '头像地址',
            en_US: 'Src',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: src | 说明: 图片类头像的资源地址',
            en_US: 'prop: src | description: resource address',
          },
        },
        setter: 'StringSetter',
      },
    ],
  },
  {
    name: 'breadcrumb',
    title: '面包屑',
    condition: (target) => {
      const _breadcrumbTarget = target.getProps().get('showBreadcrumb');
      const _breadcrumbValue = _breadcrumbTarget.getValue();
      const _breadcrumbDefaultValue = _breadcrumbTarget.getDefaultValue();
      if (_breadcrumbValue === undefined && _breadcrumbDefaultValue) {
        return _breadcrumbDefaultValue;
      } else {
        return !!_breadcrumbValue;
      }
    },
    setter: {
      componentName: 'ArraySetter',
      props: {
        itemSetter: {
          componentName: 'StringSetter',
          initialValue: '首页',
        },
      },
    },
  },
];

export default props;
