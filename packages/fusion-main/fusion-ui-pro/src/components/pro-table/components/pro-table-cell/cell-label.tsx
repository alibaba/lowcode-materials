import * as React from 'react';
// import { Ellipsis } from '@/ellipsis';
import { Balloon } from '@alifd/next';
// import { ColorType } from '@/types';
import classnames from 'classnames';
import { statusTypes } from '@/types/enum';

const { Tooltip } = Balloon;

export interface CellLabelProps extends React.HTMLProps<HTMLDivElement> {
  toolTipMode?: 'always' | 'ellipsis' | 'none';
  // color?: ColorType;
}
export const CellLabel: React.FC<CellLabelProps> = ({
  toolTipMode,
  color,
  children,
  className,
  style,
  ...props
}) => {
  const isStatusColor = statusTypes.includes(color as any);
  return (
    <div
      {...props}
      className={classnames(className, {
        [`cell-label-${color}`]: isStatusColor,
      })}
      style={{
        color: isStatusColor ? undefined : color,
        ...style,
        display: 'inline',
      }}
    >
      <CellToolTip toolTipMode={toolTipMode}>{children}</CellToolTip>
    </div>
  );
};
CellLabel.defaultProps = {
  toolTipMode: 'none',
};

export interface CellToolTipProps {
  toolTipMode?: 'always' | 'ellipsis' | 'none';
  onClick?: () => void;
}
const CellToolTip: React.FC<CellToolTipProps> = ({ toolTipMode, children }) => {
  // if (toolTipMode === 'ellipsis') {
  //   return <Ellipsis>{children}</Ellipsis>;
  // }
  if (toolTipMode === 'always') {
    return (
      <Tooltip trigger={children}>
        <>{children}</>
      </Tooltip>
    );
  }
  return <>{children}</>;
};
