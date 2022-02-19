import { Calendar } from '@alifd/next';

export default (props = {}) => {
  const { __designMode, defaultValue, value, ...otherProps } = props || {};
  let finalValue = __designMode === 'design' ? defaultValue : value;
  const finalProps = { ...otherProps };
  if (finalValue) {
    finalProps.value = typeof finalValue === 'string' ? moment(finalValue) : finalValue;
  }
  if (defaultValue) {
    finalProps.defaultValue =
      typeof defaultValue === 'string' ? moment(defaultValue) : defaultValue;
  }
  return <Calendar {...finalProps} />;
};
