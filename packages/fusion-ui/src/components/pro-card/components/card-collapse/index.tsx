import * as React from 'react';
import { useLayoutEffect } from 'react';

export const CardCollapse: React.FC<{
  collapsed: boolean;
}> = ({ collapsed, children }) => {
  const ref = React.useRef<HTMLDivElement>();
  const contentRef = React.useRef<HTMLDivElement>();
  useLayoutEffect(() => {
    if (!ref.current) {
      return () => {};
    }
    // 折叠
    if (collapsed) {
      // 解决折叠第一次也会进行动画问题
      if (ref.current.style.height === 'auto') {
        ref.current.style.height = `${contentRef.current.offsetHeight}px`;
      }
      const index = setTimeout(() => {
        ref.current.style.height = '0px';
      }, 0);
      return () => clearTimeout(index);
    }
    // 当前已经展开，不进行动画
    if (ref.current.style.height === 'auto') {
      return () => {};
    }
    // 展开
    ref.current.style.height = `${contentRef.current.offsetHeight}px`;
    const index = setTimeout(() => {
      ref.current.style.height = 'auto';
    }, 400);
    return () => clearTimeout(index);
  }, [collapsed]);

  return (
    <div className="fusion-ui-card-collapse" ref={ref}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

CardCollapse.displayName = 'CardCollapse';
