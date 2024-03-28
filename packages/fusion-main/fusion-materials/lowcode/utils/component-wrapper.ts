import * as React from 'react';

const { createElement } = React;

export const ValueWrapper = (NextFormComponent: React.ElementType, displayName: string) => {
  const WrappedComponent = (props: any) => {
    const { __designMode, value, defaultValue, ...otherProps } = props;
    const finalValue = __designMode === 'design' ? defaultValue : value;
    if (typeof finalValue !== 'undefined') {
      otherProps.value = finalValue;
    }
    return createElement(NextFormComponent, { ...otherProps });
  };
  WrappedComponent.displayName = displayName;
  return WrappedComponent;
};

export const DynamicPropWrapper = (
  prop: string,
  NextFormComponent: React.ElementType,
  displayName: string,
) => {
  const WrappedComponent = (props: any) => {
    const dynamicProp = prop;
    const defaultDynamicProp = `default${prop.slice(0, 1).toUpperCase()}${prop.slice(1)}`;
    const { __designMode, ...otherProps } = props;
    const dynamicPropValueValue = props[dynamicProp];
    const defaultDynamicPropValue = props[defaultDynamicProp];
    const finalValue = __designMode === 'design' ? defaultDynamicPropValue : dynamicPropValueValue;
    if (typeof finalValue !== 'undefined') {
      otherProps[dynamicProp] = finalValue;
    }
    return createElement(NextFormComponent, { ...otherProps });
  };
  WrappedComponent.displayName = displayName;
  return WrappedComponent;
};
