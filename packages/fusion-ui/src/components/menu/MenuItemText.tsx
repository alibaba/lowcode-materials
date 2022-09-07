import * as React from 'react';
import { Balloon } from '@alifd/next';

export type MenuItemTextProps = React.HTMLAttributes<HTMLElement>;

export class MenuItemText extends React.Component<MenuItemTextProps> {
  ref = React.createRef();

  state = {
    isOverflow: false,
  };

  componentDidMount() {
    if (this.ref.current && this.ref.current.scrollWidth > this.ref.current.offsetWidth) {
      this.setState({
        isOverflow: true,
      });
    }
  }

  render() {
    const { isOverflow } = this.state;
    const { children, ...otherProps } = this.props;

    const trigger = (
      <div ref={this.ref} {...otherProps}>
        {children}
      </div>
    );

    if (isOverflow) {
      return (
        <Balloon.Tooltip trigger={trigger} triggerType="hover">
          {children}
        </Balloon.Tooltip>
      );
    }

    return trigger;
  }
}
