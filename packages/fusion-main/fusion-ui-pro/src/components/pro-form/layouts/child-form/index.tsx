import * as React from 'react';
import { formatFormItems, ProFormProps } from '../pro-form';
import { ResponsiveGrid } from '@alifd/next';
import { bizCssPrefix } from '@/variables';

export interface ChildFormProps extends ProFormProps {
  mode?: string;
}

const ChildForm = (props: ChildFormProps) => {
  const { children, columns, mode, spacing = '0 16px', emptyContent, ...otherProps } = props;
  const cssPrefix = `${bizCssPrefix}-${mode || 'subForm'}`;
  return (
    <div className={`${cssPrefix}-child-form`}>
      {children ? (
        <ResponsiveGrid style={otherProps.style} gap={spacing} columns={columns}>
          {formatFormItems(
            children,
            {
              columns,
              ...otherProps,
            },
            true,
          )}
        </ResponsiveGrid>
      ) : (
        <div className="empty-content">{emptyContent}</div>
      )}
    </div>
  );
};

ChildForm.displayName = 'ChildForm';

export default ChildForm;
