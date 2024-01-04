import React from "react";

export interface SafeViewProps {
  forceInset: {
    top: 'always' | 'never',
    bottom: 'always' | 'never'
  },
  className?: string;
  style?: React.CSSProperties;
}