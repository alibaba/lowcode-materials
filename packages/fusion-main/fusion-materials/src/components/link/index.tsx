import * as React from 'react';
interface LinkProps {
  target?: string;
  children?: string;
  href?: string;
  style?: object;
  __designMode?: string;
}

/**
 * 文字 字体、大小、行高
 * @param props
 */
const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (props, ref) => {
  const { children, __designMode, ...others } = props;
  const otherProps: any = {};
  if (__designMode === 'design') {
    otherProps.onClick = (e: Event) => {
      e.preventDefault();
    };
  }
  return (
    <a {...others} ref={ref} {...otherProps}>
      {children}
    </a>
  );
};

const RefLink = React.forwardRef(Link);

RefLink.defaultProps = {
  href: 'https://fusion.design',
  children: '这是一个超链接',
  target: '_blank',
};

export default RefLink;
