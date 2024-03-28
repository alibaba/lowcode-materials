import { Icon, Balloon } from '@alifd/next';
import * as React from 'react';
import cns from 'classnames';
import { IconProps } from '@alifd/next/types/icon';

const RemoteIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2535522_4oyyibdwj5v.js',
});

export const CustomIcon = (props) => {
  const { type, ...otherProps } = props;
  return <RemoteIcon type={`icon${type}`} {...otherProps} />;
};

const { Tooltip } = Balloon;
/**
 * icon组
 */
export const ToggleIconGroup: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cns('fusion-ui-toggle-icon-group', className)} {...props} />;
export interface ToggleIconProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  title?: string;
  active?: boolean;
  type: IconProps['type'];
  size?: IconProps['size'];
}
export const ToggleIcon = React.forwardRef<HTMLSpanElement, ToggleIconProps>(
  ({ title, active, type, size, className, ...props }, ref) => {
    const trigger = (
      <span
        ref={ref}
        {...props}
        className={cns(
          'fusion-ui-toggle-icon',
          {
            'fusion-ui-toggle-icon--active': active,
          },
          className,
        )}
      >
        <CustomIcon type={type} size={size} />
      </span>
    );
    if (!title) return trigger;
    return <Tooltip trigger={trigger}>{title}</Tooltip>;
  },
);
ToggleIcon.defaultProps = {
  size: 'small',
};
