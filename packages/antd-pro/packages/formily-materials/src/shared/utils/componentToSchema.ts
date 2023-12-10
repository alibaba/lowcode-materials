import { Schema } from '@formily/react';

/**
 * 将现有 properties 合入到 schema.items.properties 中
 * @param schema
 * @param properties
 * @returns
 */
export const mergeItems = (schema: Schema, properties) => {
  schema.items = new Schema({
    // todo: 这里写死了 object，不够灵活，应该要引入对象容器
    type: 'object',
    properties: {
      ...((schema?.items as any)?.properties || {}),
      ...properties,
    },
  });

  return schema;
};

/**
 * 将现有 properties 合并到当前 schema 中
 * @param schema
 * @param properties
 * @returns
 */
export const mergeProperties = (schema: Schema, properties) => {
  schema.setProperties({
    ...properties,
    ...(schema.properties || {}),
  });

  return schema;
};

/**
 * reactNode 转换成 type=void 的 schema
 */
export const reactNode2VoidSchema = (
  children?: any,
  componentsNameMap = new Set<string>(),
): [any, Set<string>, any] => {
  const result = {};

  if (!children) return [result, componentsNameMap, null];

  // plugins 注入的 __component_name
  const componentName = children.props.__component_name;

  if (!componentName) {
    console.error(`can't find component name`, children.props);
    return [result, componentsNameMap, null];
  }

  // 保存组件名称
  componentsNameMap.add(componentName);

  // lowcode-engine 自带
  const name = children.props.__id;

  // 当前字段schema
  const fieldSchema: any = {
    [name]: {
      type: 'void',
      'x-component': componentName,
      'x-compile-omitted': ['x-component-props'],
      'x-component-props': {
        ...children.props,
        // fix: children被formily直接渲染，但是如果下一个组件是arrayCards，渲染是无效的，需要原始信息
        __origin_child: children.props.children,
      },
    },
  };

  // 组件不需要获取子schema，他们自己渲染children
  return [fieldSchema, componentsNameMap, name];
};

/**
 * @description 使用 reactNode2SchemaV2 + getComponentNamesSet 替换该方法，逻辑拆分细些，更好封装，加钩子
 * @deprecated
 */
export const reactNode2Schema = (
  children?: any[],
  componentsNameMap = new Set<string>(),
  targetComponents?: string[] | string,
): any => {
  let schema = {};

  const schemaList = [];

  if (typeof targetComponents === 'string') {
    targetComponents = [targetComponents];
  }

  if (!children) return [schema, componentsNameMap];

  for (let i = 0; i < children.length; i++) {
    if (targetComponents && !targetComponents.includes(children[i]?.props?.__component_name)) {
      return;
    }

    const [fieldSchema] = reactNode2VoidSchema(children[i], componentsNameMap);

    schema = {
      ...schema,
      ...fieldSchema,
    };

    schemaList.push(fieldSchema);
  }

  return {
    schema,
    schemaList,
    componentsNameMap,
  };
};

export const reactNode2SchemaV2 = (children: any[], targetComponents?: string[] | string): any => {
  if (typeof targetComponents === 'string') {
    targetComponents = [targetComponents];
  }

  return (children || []).reduce(
    (prev, child) => {
      if (targetComponents && !targetComponents.includes(child?.props?.__component_name)) {
        return prev;
      } else {
        const [outerSchema, , id] = reactNode2VoidSchema(child);

        const innerSchema = outerSchema[id];

        // 通过 id 寻 schema，或 通过 schema 寻 id
        prev.innerSchemaMap.set(id, innerSchema);
        prev.innerSchemaMap.set(innerSchema, id);

        Object.assign(prev.innerSchema, {
          [id]: innerSchema,
        });

        Object.assign(prev.outerSchema, {
          ...outerSchema,
        });

        return {
          // outerSchema 相对 inerrSchema 多包裹了一层
          outerSchema: prev.outerSchema,
          outerSchemas: prev.outerSchemas.concat(outerSchema),
          innerSchema: prev.innerSchema,
          innerSchemas: prev.innerSchemas.concat(innerSchema),
          innerSchemaMap: prev.innerSchemaMap,
        };
      }
    },
    {
      outerSchema: {},
      outerSchemas: [],
      innerSchema: {},
      innerSchemas: [],
      innerSchemaMap: new Map(),
    },
  );
};

/**
 * 获取要到 SchemaField 里注册的组件的名称集合
 */
export const getComponentNamesSet = (
  children: any[],
  depth = 1,
  set = new Set<string>(),
): Set<string> => {
  if (depth === 0) return set;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    const componentName = child.props.__component_name;

    if (componentName) {
      set.add(componentName);
    }

    getComponentNamesSet(child?.props.children ?? [], depth - 1, set);
  }

  return set;
};
