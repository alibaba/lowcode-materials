import React from 'react';
import ReactFlowComp from 'reactflow';
import 'reactflow/dist/style.css';

interface ReactFlowWrapperProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export * from 'reactflow';