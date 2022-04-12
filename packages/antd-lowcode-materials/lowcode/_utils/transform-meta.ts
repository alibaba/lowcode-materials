import {
  FieldConfig,
  PropConfig,
  PropType,
  SetterType,
  OneOf,
  ObjectOf,
  ArrayOf,
  TransformedComponentMetadata,
} from '@ali/lowcode-types';

// http://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-engine/merge_requests/1054678
// 这个MR合并后可以去掉这个文件

function propConfigToFieldConfig(
  propConfig: PropConfig,
  supportVariable: boolean,
): FieldConfig {
  const { name, description } = propConfig;
  const title = {
    label: {
      type: 'i18n',
      'en-US': name,
      'zh-CN': description?.slice(0, 10) || name,
    },
    tip: description ? `${name} | ${description}` : undefined,
  };

  let setter =
    (propConfig as any).setter ||
    propTypeToSetter(propConfig.propType, supportVariable);

  if (supportVariable && (propConfig as any).supportVariable !== false) {
    if (
      setter.componentName === 'MixedSetter' &&
      setter.props?.setters &&
      setter.props?.setters?.every((setter: any) => {
        return (
          setter?.componentName !== 'VariableSetter' &&
          setter !== 'VariableSetter'
        );
      })
    ) {
      setter.props.setters.push('VariableSetter');
    } else if (
      setter &&
      setter !== 'VariableSetter' &&
      setter.componentName !== 'VariableSetter'
    ) {
      setter = {
        componentName: 'MixedSetter',
        props: {
          setters: [setter, 'VariableSetter'],
        },
      };
    }
  }

  return {
    title,
    ...propConfig,
    // TODO 这边直接用propConfig，将setter丢在propconfig里，需要确认是否在PropConfig扩展还是换实现
    setter,
  };
}

function propTypeToSetter(
  propType: PropType,
  supportVariable: boolean,
): SetterType {
  let typeName: string;
  let isRequired: boolean | undefined = false;
  if (typeof propType === 'string') {
    typeName = propType;
  } else if (typeof propType === 'object') {
    typeName = propType.type;
    isRequired = propType.isRequired;
  } else {
    typeName = 'string';
  }
  // TODO: use mixinSetter wrapper
  switch (typeName) {
    case 'string':
      return {
        componentName: 'StringSetter',
        isRequired,
        initialValue: '',
      };
    case 'number':
      return {
        componentName: 'NumberSetter',
        isRequired,
        initialValue: 0,
      };
    case 'bool':
      return {
        componentName: 'BoolSetter',
        isRequired,
        initialValue: false,
      };
    case 'oneOf':
      const dataSource = ((propType as OneOf).value || []).map(
        (value, index) => {
          const t = typeof value;
          return {
            label:
              t === 'string' || t === 'number' || t === 'boolean'
                ? String(value)
                : `value ${index}`,
            value,
          };
        },
      );
      const componentName =
        dataSource.length >= 4 ? 'SelectSetter' : 'RadioGroupSetter';
      return {
        componentName,
        props: { dataSource, options: dataSource },
        isRequired,
        initialValue: dataSource[0] ? dataSource[0].value : null,
      };

    case 'element':
    case 'node': // TODO: use Mixin
      return {
        // slotSetter
        componentName: 'SlotSetter',
        props: {
          mode: typeName,
        },
        isRequired,
        initialValue: {
          type: 'JSSlot',
          value: [],
        },
      };
    case 'shape':
    case 'exact':
      const items = ((propType as any).value || []).map((item: any) =>
        propConfigToFieldConfig(item, supportVariable),
      );
      return {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items,
            extraSetter:
              typeName === 'shape'
                ? propTypeToSetter('any', supportVariable)
                : null,
          },
        },
        isRequired,
        initialValue: (field: any) => {
          const data: any = {};
          items.forEach((item: any) => {
            let initial = item.defaultValue;
            if (
              initial == null &&
              item.setter &&
              typeof item.setter === 'object'
            ) {
              initial = (item.setter as any).initialValue;
            }
            data[item.name] = initial
              ? typeof initial === 'function'
                ? initial(field)
                : initial
              : null;
          });
          return data;
        },
      };
    case 'object':
    case 'objectOf':
      return {
        componentName: 'ObjectSetter',
        props: {
          config: {
            extraSetter: propTypeToSetter(
              typeName === 'objectOf' ? (propType as ObjectOf).value : 'any',
              supportVariable,
            ),
          },
        },
        isRequired,
        initialValue: {},
      };
    case 'array':
    case 'arrayOf':
      return {
        componentName: 'ArraySetter',
        props: {
          itemSetter: propTypeToSetter(
            typeName === 'arrayOf' ? (propType as ArrayOf).value : 'any',
            supportVariable,
          ),
        },
        isRequired,
        initialValue: [],
      };
    case 'func':
      return {
        componentName: 'FunctionSetter',
        isRequired,
      };
    case 'color':
      return {
        componentName: 'ColorSetter',
        isRequired,
      };
    case 'oneOfType':
      return {
        componentName: 'MixedSetter',
        props: {
          // TODO:
          setters: (propType as any).value.map((item: any) =>
            propTypeToSetter(item, supportVariable),
          ),
        },
        isRequired,
      };
    default:
    // do nothing
  }
  return {
    componentName: 'MixedSetter',
    isRequired,
    props: {},
  };
}

const NO_EVENTS = ['beforeUpload'];
const EVENT_RE = /^on|after|before[A-Z][\w]*$/;

export default function(
  metadata: TransformedComponentMetadata,
  supportVariable: boolean,
): TransformedComponentMetadata {
  const { configure = {} } = metadata;
  // TODO types后续补充
  let extendsProps: any = null;
  if (configure.props) {
    if (Array.isArray(configure.props)) {
      return metadata;
    }
    const { isExtends, override = [] } = configure.props;
    // 不开启继承时，直接返回configure配置
    if (!isExtends) {
      return {
        ...metadata,
        configure: {
          ...configure,
          props: [...override],
        },
      };
    }

    extendsProps = {};
    // 开启继承后，缓存重写内容的配置
    override.forEach((prop: any) => {
      extendsProps[prop.name] = prop;
    });
  }

  if (!metadata.props) {
    return {
      ...metadata,
      configure: {
        ...configure,
        props: [],
      },
    };
  }
  const { component = {}, supports = {} } = configure;
  const supportedEvents: any[] | null = (supports as any).events ? null : [];
  const props: FieldConfig[] = [];

  metadata.props.forEach(prop => {
    const { name, propType, description } = prop;
    if (
      name === 'children' &&
      (component.isContainer ||
        propType === 'node' ||
        propType === 'element' ||
        propType === 'any')
    ) {
      if (component.isContainer !== false) {
        component.isContainer = true;
        props.push(propConfigToFieldConfig(prop, supportVariable));
        return;
      }
    }

    if (
      EVENT_RE.test(name) &&
      NO_EVENTS.indexOf(name) < 0 &&
      (propType === 'func' || propType === 'any')
    ) {
      if (supportedEvents) {
        supportedEvents.push({
          name,
          description,
        });
        (supports as any).events = supportedEvents;
      }
      return;
    }

    if (name === 'className' && (propType === 'string' || propType === 'any')) {
      if ((supports as any).className == null) {
        (supports as any).className = true;
      }
      return;
    }

    if (name === 'style' && (propType === 'object' || propType === 'any')) {
      if ((supports as any).style == null) {
        (supports as any).style = true;
      }
      return;
    }

    // 存在覆盖配置时
    if (extendsProps) {
      if (name in extendsProps) {
        prop = extendsProps[name];
      }
    }

    props.push(propConfigToFieldConfig(prop, supportVariable));
  });

  return {
    ...metadata,
    configure: {
      ...configure,
      props,
      supports,
      component,
    },
  } as any;
}
