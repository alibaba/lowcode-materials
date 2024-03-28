import * as React from 'react';
import { Button as NextButton, Badge as NextBadge, Balloon } from '@alifd/next';
import { BadgeProps } from '@alifd/next/types/badge';
import { ButtonProps as NextButtonProps } from '@alifd/next/types/button';

export interface ButtonProps extends NextButtonProps {
  /**
   * 徽标相关属性
   */
  badgeProps?: BadgeProps;
  tooltipProps?: TooltipProps;
}

export interface TooltipProps {
  showTooltip: boolean;
  tooltipMessage: string;
  triggerType: 'click' | 'hover';
}
export interface ButtonState {
  showTooltip: boolean;
  tooltipMessage: string;
  triggerType: 'click' | 'hover';
}

export class Button extends React.Component<ButtonProps, ButtonState> {
  static displayName = 'Button';

  static getDerivedStateFromProps = (
    nextProps: ButtonProps,
    prevState: ButtonState = {
      showTooltip: false,
      tooltipMessage: '',
      triggerType: 'click',
    },
  ) => {
    const { tooltipProps = {} } = nextProps;
    return {
      ...prevState,
      ...tooltipProps,
    };
  };

  constructor(props: ButtonProps) {
    super(props);
    const { tooltipProps = {} } = props;
    this.state = {
      showTooltip: false,
      tooltipMessage: '',
      triggerType: 'click',
      ...tooltipProps,
    };
  }

  /**
   * @deprecated
   * @param message
   * @param triggerType
   */
  toggleTip = (message: string, triggerType: 'click' | 'hover') => {
    const { triggerType: stateTriggerType } = this.state;
    this.setState({
      showTooltip: true,
      tooltipMessage: message,
      triggerType: triggerType || stateTriggerType || 'click',
    });
  };

  enableTooltip = (triggerType: 'click' | 'hover' = 'click', message: string) => {
    const { triggerType: stateTriggerType } = this.state;
    this.setState({
      showTooltip: true,
      tooltipMessage: message,
      triggerType: triggerType || stateTriggerType || 'click',
    });
  };

  render() {
    const { showTooltip, tooltipMessage, triggerType } = this.state;
    const { badgeProps, id, ...otherProps } = this.props;
    const buttonComp = <NextButton {...otherProps} />;
    let finalComp = buttonComp;
    if (badgeProps) {
      finalComp = <NextBadge {...badgeProps}>{buttonComp}</NextBadge>;
    }

    if (showTooltip) {
      finalComp = (
        <Balloon trigger={finalComp} defaultVisible triggerType={triggerType}>
          {tooltipMessage}
        </Balloon>
      );
    }

    return <div id={id}>{finalComp}</div>;
  }
}
