import React, { createElement, useRef, useEffect } from 'react';
import { isPlainObj } from '../utils';
export * from './sources';

const isNumSize = (val: any) => /^[\d.]+$/.test(val);

const ShadowSVG = (props) => {
  const ref = useRef<HTMLDivElement>();
  const width = isNumSize(props.width) ? `${props.width}px` : props.width;
  const height = isNumSize(props.height) ? `${props.height}px` : props.height;
  useEffect(() => {
    if (ref.current) {
      const root = ref.current.attachShadow({
        mode: 'open',
      });
      root.innerHTML = `<svg viewBox="0 0 1024 1024" style="width:${width};height:${height}">${props.content}</svg>`;
    }
  }, []);
  // @ts-ignore
  return <div ref={ref}></div>;
};

const width = 150;
const height = 40;
const theme = 'light';

export const takeIcon = (infer: React.ReactNode) => {
  if (React.isValidElement(infer)) {
    if (infer.type === 'svg') {
      return React.cloneElement(infer, {
        height,
        width,
        fill: 'currentColor',
        viewBox: infer.props.viewBox || '0 0 1024 1024',
        focusable: 'false',
        'aria-hidden': 'true',
      });
    } else if (infer.type === 'path' || infer.type === 'g') {
      return (
        <svg
          viewBox="0 0 1024 1024"
          height={height}
          width={width}
          fill="currentColor"
          focusable="false"
          aria-hidden="true"
        >
          {/* @ts-ignore */}
          {infer}
        </svg>
      );
    }
  } else if (isPlainObj(infer)) {
    if (infer[theme]) {
      return takeIcon(infer[theme]);
    } else if (infer['shadow']) {
      return <ShadowSVG width={width} height={height} content={infer['shadow']} />;
    }
    return null;
  }
  return infer;
};
