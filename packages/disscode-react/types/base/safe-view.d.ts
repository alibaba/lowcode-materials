import { ComponentClass } from 'react';

export interface SafeViewProps {
  forceInset: {
    top: 'always' | 'never',
    bottom: 'always' | 'never'
  },
  className?: string;
  style?: React.CSSProperties;
}

declare const SafeView: ComponentClass<SafeViewProps>;

export default SafeView;
