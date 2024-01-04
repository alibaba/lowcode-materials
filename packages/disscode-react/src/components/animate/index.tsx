import React, {
  FunctionComponent, useState, useEffect,
} from 'react';
import omit from 'omit.js';
// import * as PropTypes from 'prop-types';

import { usePrevious } from './usePrevious';

import { View } from '@tarojs/components';

export interface AnimateProp {
  animationIn?: string,
  animationOut?: string,
  inDelay?: number,
  outDelay?: number,
  inDuration?: number,
  outDuration?: number,
  repeat?: number,
  onMount?: boolean,
  visible?: boolean,
  loop?: boolean,
}

interface AnimateProps extends AnimateProp {
  className?: string,
  style?: React.CSSProperties,
  children?: React.ReactNode,
  onClick?: (e: any) => void;
}

const Animate: FunctionComponent<AnimateProps> = ({
  animationIn,
  animationOut,
  inDelay,
  outDelay,
  inDuration,
  outDuration,
  onMount,
  visible,
  repeat,
  loop,
  className,
  style,
  children,
  ...other
}): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const prevMounted = usePrevious(mounted);

  const buildClasses = () => {
    const classes = ['animate__animated'];
    if (loop === true) {
      classes.push('animate__infinite');
    }
    if (repeat !== null && repeat && repeat > 0) {
      classes.push(`animate__repeat-${repeat}`);
    }
    if (onMount || prevMounted) {
      if (visible) {
        classes.push(`animate__${animationIn}`);
      } else {
        classes.push(`animate__${animationOut}`);
      }
    } else if (!visible) {
      classes.push('animate__hidden');
    }
    return `${className} ${classes.join(' ')}`.trim();
  }

  useEffect(() => {
    setMounted(true);
  });

  return (
    <View
      className={buildClasses()}
      style={{
        animationDelay: `${visible ? inDelay : outDelay}ms`,
        animationDuration: `${visible ? inDuration : outDuration}ms`,
        pointerEvents: visible ? 'all' : 'none',
        ...style,
      }}
      {...omit(other, [])}
    >
      {children}
    </View>
  );
};

Animate.displayName = 'Animate';

Animate.defaultProps = {
  animationIn: 'fadeIn',
  animationOut: 'fadeOut',
  inDelay: 0,
  outDelay: 0,
  inDuration: 1000,
  outDuration: 1000,
  repeat: 0,
  onMount: true,
  visible: true,
  loop: false,
  children: null,
};

// Animate.propTypes = {
//   animationIn: PropTypes.string,
//   animationOut: PropTypes.string,
//   inDelay: PropTypes.number,
//   outDelay: PropTypes.number,
//   inDuration: PropTypes.number,
//   outDuration: PropTypes.number,
//   repeat: PropTypes.oneOf([0, 1, 2, 3]),
//   onMount: PropTypes.bool,
//   visible: PropTypes.bool,
//   loop: PropTypes.bool,
//   className: PropTypes.string,
//   style: PropTypes.objectOf(PropTypes.object),
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]),
// };

export default Animate;
