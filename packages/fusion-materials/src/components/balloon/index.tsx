import { Balloon } from '@alifd/next';

const { Tooltip } = Balloon;

export default (props = {}) => {
  const { __designMode, defaultVisible, visible, mode, children, ...otherProps } = props || {};
  console.log('props: ', props);
  const RealComponent = mode === 'Tooltip' ? Tooltip : Balloon;
  let finalValue = __designMode === 'design' ? defaultVisible : visible;
  const finalProps = { ...otherProps };
  if (typeof finalValue !== 'undefined') {
    finalProps.visible = finalValue;
  }
  if (typeof defaultVisible !== 'undefined') {
    finalProps.defaultVisible = defaultVisible;
  }

  return <RealComponent {...finalProps}>{children}</RealComponent>;
};
