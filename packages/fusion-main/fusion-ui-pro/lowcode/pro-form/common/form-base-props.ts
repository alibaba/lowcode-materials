import { isEqual, throttle } from 'lodash';

import { IProps } from '../../types';
import { formItemShortcutProps as baseFormItemProps } from './form-item-props';
import { hideProp, showWithLabelAlign } from '../../utils';

function getInitialPropsForFormItem(componentName, currentComponentProps) {
  const component = AliLowCodeEngine.material
    .getAssets()
    .components.filter((item) => item.componentName === componentName)[0];
  const defaultProps = {};
  const initials = component?.advanced?.initials;
  if (initials && Array.isArray(initials) && initials.length) {
    initials.forEach((initial) => {
      if (initial && initial.name && initial.initial) {
        defaultProps[initial.name] =
          typeof initial.initial === 'function' ? initial.initial() : initial.initial;
      }
    });
  }
  const props = { ...currentComponentProps };

  Object.keys(defaultProps).forEach((item) => {
    const propValue = currentComponentProps[item];
    if (!propValue && defaultProps[item]) {
      props[item] = defaultProps[item];
    }
  });
  return props;
}

const itemSetValue = throttle((target, value) => {
  const { node } = target;
  const mergedValueMap = {};
  const mergedValues = [];
  const map = {};
  if (!Array.isArray(value)) {
    value = [];
  }
  value.forEach((item) => {
    if (!mergedValueMap[item.primaryKey]) {
      mergedValueMap[item.primaryKey] = item;
      mergedValues.push(item);
    }
    const FormItem = Object.assign({}, item);
    if (!FormItem.componentName) {
      // 新增表单项时初始化
      FormItem.componentName = 'FormInput';
    }
    map[item.primaryKey] = FormItem;
  });
  const children = node.children.filter((child) => {
    if (!mergedValueMap[child.propsData.primaryKey]) {
      mergedValueMap[child.propsData.primaryKey] = child.propsData;
      mergedValues.push(child.propsData);
    }
    return true;
  });
  const preValue = children.map((child) => {
    return child.propsData;
  });
  if (isEqual(preValue, value)) {
    return;
  }
  node.children.mergeChildren(
    (child) => {
      const primaryKey =
        child.getPropValue('formItemProps')?.primaryKey || child.getPropValue('primaryKey');
      if (Object.hasOwnProperty.call(map, primaryKey)) {
        const { componentName, componentProps, ...otherProps } = map[primaryKey];
        const newComponentProps = getInitialPropsForFormItem(componentName, componentProps);
        let newProps;
        if (child.componentName === 'ProFormItem') {
          const formItemProps = { ...(child.propsData || {}), ...otherProps };
          delete formItemProps.componentProps;
          delete formItemProps.componentName;
          newProps = {
            formItemProps,
            ...newComponentProps,
          };
          delete newProps.componentName;
        } else {
          newProps = {
            ...(child.propsData || {}),
            ...newComponentProps,
            formItemProps: otherProps,
          };
        }

        node.replaceChild(child, {
          componentName,
          props: newProps,
        });
        delete map[primaryKey];
        return false;
      }
      return true;
    },
    () => {
      const items = [];
      for (const primaryKey in map) {
        if (Object.hasOwnProperty.call(map, primaryKey)) {
          const { componentName, componentProps, ...otherProps } = map[primaryKey];
          const newProps = {
            formItemProps: otherProps,
            ...componentProps,
          };
          items.push({
            componentName,
            props: newProps,
          });
        }
      }
      return items;
    },
    (child1, child2) => {
      const a = mergedValues.findIndex(
        (item) =>
          String(item.primaryKey) ===
          String(
            child1.getPropValue('formItemProps')?.primaryKey || child1.getPropValue('primaryKey'),
          ),
      );
      const b = mergedValues.findIndex(
        (item) =>
          String(item.primaryKey) ===
          String(
            child2.getPropValue('formItemProps')?.primaryKey || child2.getPropValue('primaryKey'),
          ),
      );
      return a - b;
    },
  );
});

export const formItemsProps = {
  name: '!items',
  title: '表单项',
  display: 'accordion',
  virtual: true,
  setter: {
    componentName: 'ArraySetter',
    props: {
      itemSetter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'componentName',
                title: '表单项组件',
                display: 'inline',
                defaultValue: 'FormInput',
                important: true,
                setter: () => {
                  return {
                    componentName: 'SelectSetter',
                    props: {
                      options: AliLowCodeEngine.material
                        .getAssets()
                        .components.filter((item) => item.isFormItemComponent)
                        .map((item) => {
                          return {
                            title: item.title || item.componentName,
                            value: item.componentName,
                          };
                        }),
                    },
                  };
                },
              },
              ...baseFormItemProps,
            ],
          },
        },
        initialValue: () => {
          const mockProps = {};
          baseFormItemProps.forEach((item) => {
            if (item.defaultValue) {
              if (typeof item.defaultValue === 'function') {
                mockProps[item.name] = item.defaultValue();
              } else {
                mockProps[item.name] = item.defaultValue;
              }
            }
          });
          return {
            componentName: 'FormInput',
            ...mockProps,
          };
        },
      },
    },
  },
  getValue: (target) => {
    const { children } = target.node;
    const hotValue = children.map((child) => {
      const { propsData } = child;
      // 兼容 FroFromItem -> Input 的数据结构
      if (child.componentName === 'ProFormItem') {
        const { componentProps, ...formItemProps } = propsData || {};
        return {
          ...formItemProps,
          componentProps,
        };
      } else {
        const { formItemProps, ...componentProps } = propsData || {};
        return {
          ...formItemProps,
          componentName: child.componentName,
          componentProps,
        };
      }
    });
    return hotValue;
  },
  setValue: itemSetValue,
};

const props: IProps[] = [
  {
    name: 'ref',
    condition: hideProp,
    setter: (target) => {
      if (!target?.getValue()) {
        target?.setValue(`pro-form-${target?.id}`);
      }
      return 'StringSetter';
    },
  },
  {
    name: 'globalConfig',
    title: '全局配置',
    type: 'group',
    display: 'accordion',
    items: [
      {
        name: 'inline',
        condition: hideProp,
        title: {
          label: {
            type: 'i18n',
            zh_CN: '内联表单',
            en_US: 'Inline',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: inline | 说明: 内联表单',
            en_US: 'prop: inline | description: inline form',
          },
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: ['BoolSetter', 'ExpressionSetter'],
          },
        },
        setValue: (target, value) => {
          if (value === true) {
            target.getProps().setPropValue('labelCol', null);
            target.getProps().setPropValue('wrapperCol', null);
          } else {
            target.getProps().setPropValue('labelCol', { fixedSpan: 4 });
            target.getProps().setPropValue('wrapperCol', null);
          }
          return target.getProps().setPropValue('inline', value);
        },
      },
      {
        name: 'fullWidth',
        condition: hideProp,
        title: {
          label: {
            type: 'i18n',
            zh_CN: '宽度占满',
            en_US: 'FullWidth',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: fullWidth | 说明: 单个 Item 中表单类组件宽度是否是100%',
            en_US: 'prop: fullWidth | description: full width',
          },
        },
        setter: 'BoolSetter',
      },
 
      {
        name: 'status',
        virtual: true,
        title: {
          label:'状态',
          tip:"只读态:readonly,编辑态:editable"
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '只读态',
                value: 'readonly',
              },
              {
                title: '编辑态',
                value: 'editable',
              },
            ],
          },
        },
        getValue: (target) => {
          const isPreview = target.getProps().getPropValue('isPreview');
          return isPreview ? 'readonly' : 'editable';
        },
        setValue: (target, value) => {
          target.getProps().setPropValue('isPreview', value === 'readonly');
        },
        defaultValue: 'editable',
      },
      {
        name: 'isPreview',
        condition: () => false,
        title: {
          label: {
            type: 'i18n',
            zh_CN: '预览态',
            en_US: 'Preview Mode',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: isPreview | 说明: 是否开启预览态',
            en_US: 'prop: isPreview | description: preview mode',
          },
        },
        setter: 'BoolSetter',
        description: '是否开启预览态',
      },
      {
        name: 'columns',
        title: '布局',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '一列',
                value: 1,
              },
              {
                title: '二列',
                value: 2,
              },
              {
                title: '三列',
                value: 3,
              },
              {
                title: '四列',
                value: 4,
              },
            ],
          },
        },
      },
      {
        name: 'labelAlign',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标签位置',
            en_US: 'Label Align',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: labelAlign | 说明: 标签的位置\n@enumdesc 上, 左, 内',
            en_US: 'prop: labelAlign | description: label align',
          },
        },
        
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '上',
                value: 'top',
              },
              {
                title: '左',
                value: 'left',
              },
              {
                title: '内',
                value: 'inset',
              },
            ],
          },
        },
        extraProps: {
          setValue: (target, value) => {
            if (value === 'inset') {
              target.getProps().setPropValue('labelCol.fixedSpan', 0);
              target.getProps().setPropValue('wrapperCol', null);
            } else if (value === 'left') {
              target.getProps().setPropValue('labelCol.fixedSpan', 4);
              target.getProps().setPropValue('wrapperCol', null);
            }
            return target.getProps().setPropValue('labelAlign', value);
          },
        },
        defaultValue: 'top',
      },
      {
        name: 'labelCol.fixedSpan',
        title: '标题宽度',
        condition: showWithLabelAlign,
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
      },


      {
        name: 'labelCol.offset',
        title: '标题偏移',
        condition: showWithLabelAlign,
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
      },
      {
        name: 'wrapperCol.span',
        title: '内容宽度',
        condition: showWithLabelAlign,
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
      },
      {
        name: 'wrapperCol.offset',
        title: '内容偏移',
        condition: showWithLabelAlign,
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
      },
      {
        name: 'labelTextAlign',
        condition: showWithLabelAlign,
        title: {
          label: {
            type: 'i18n',
            zh_CN: '标签对齐',
            en_US: 'Text Align',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: labelTextAlign | 说明: 标签的左右对齐方式\n@enumdesc 左, 右',
            en_US: 'prop: labelTextAlign | description: label text align',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['left', 'right'],
          },
        },
        defaultValue: 'right',
      },
    ],
  },
  {
    name: 'field',
    condition: hideProp,
    title: {
      label: {
        type: 'i18n',
        zh_CN: 'Field 实例',
        en_US: 'Field',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: field | 说明: 传入 Field 实例',
        en_US: 'prop: field | description: field instance',
      },
      docUrl:
        'https://fusion.alibaba-inc.com/pc/component/basic/form#%E5%A4%8D%E6%9D%82%E5%8A%9F%E8%83%BD(Field)',
    },
    setter: {
      componentName: 'ExpressionSetter',
    },
  },
  {
    name: 'value',
    condition: hideProp,
    title: {
      label: {
        type: 'i18n',
        zh_CN: '表单值',
        en_US: 'value',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: value | 说明: 表单值',
        en_US: 'prop: value | description: value instance',
      },
    },
    setter: {
      componentName: 'MixedSetter',
      props: {
        setters: ['JsonSetter', 'ExpressionSetter'],
      },
    },
  },
  {
    name: 'size',
    condition: hideProp,
    title: {
      label: {
        type: 'i18n',
        zh_CN: '尺寸',
        en_US: 'Size',
      },
      tip: {
        type: 'i18n',
        zh_CN:
          '属性: size | 说明: 单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。\n@enumdesc 大, 中, 小',
        en_US: 'prop: size | description: size',
      },
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: ['large', 'medium', 'small'],
      },
    },
    defaultValue: 'medium',
  },
  {
    name: 'device',
    condition: hideProp,
    title: {
      label: {
        type: 'i18n',
        zh_CN: '设备',
        en_US: 'Device',
      },
      tip: {
        type: 'i18n',
        zh_CN: '属性: device | 说明: 预设屏幕宽度',
        en_US: 'prop: device | description: device',
      },
    },
    setter: {
      componentName: 'RadioGroupSetter',
      props: {
        options: ['phone', 'tablet', 'desktop'],
      },
    },
    defaultValue: 'desktop',
  },
  formItemsProps,
];

export default props;
