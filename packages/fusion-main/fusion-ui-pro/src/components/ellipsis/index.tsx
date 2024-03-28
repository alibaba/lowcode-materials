import cx from 'classnames';
import * as React from 'react';
import { Balloon } from '@alifd/next';

const { Tooltip } = Balloon;
export interface FusionEllipsisProps {
  style?: React.CSSProperties;
  className?: string;
  /**
   * 用于决定省略号出现的位置
   */
  ellipsisPosition?: 'middle' | 'end';
  /**
   * 在 ellipsisPosition="middle" 生效
   * 决定出现在末尾的字符串的数量
   */
  endCharCount?: number;
  /**
   * 是否有 tooltip
   */
  hasTooltip?: boolean;
  /**
   * tooltip 属性覆盖
   */
  tooltipProps?: any;
}

interface FusionEllipsisState {
  isOverflow: boolean;
}

export class Ellipsis extends React.Component<FusionEllipsisProps, FusionEllipsisState> {
  static displayName = 'Ellipsis';

  static defaultProps = {
    ellipsisPosition: 'end',
    endCharCount: 8,
    hasTooltip: true,
  };

  private textRef;

  constructor(props) {
    super(props);
    this.state = {
      isOverflow: false,
    };
  }

  componentDidMount() {
    if (this.props.ellipsisPosition === 'middle') {
      if (this.textRef && this.textRef.scrollWidth > this.textRef.offsetWidth) {
        this.setState({
          isOverflow: true,
        });
      }
    }
  }

  onMouseEnter = () => {
    if (this.textRef && this.textRef.scrollWidth > this.textRef.offsetWidth) {
      this.setState({
        isOverflow: true,
      });
    } else {
      this.setState({
        isOverflow: false,
      });
    }
  };

  saveTextRef = (ref) => {
    this.textRef = ref;
  };

  render() {
    const { isOverflow } = this.state;
    const {
      children,
      className,
      ellipsisPosition,
      endCharCount,
      hasTooltip,
      tooltipProps,
      ...otherProps
    } = this.props;

    const classes = cx({
      'fusion-ui-ellipsis': true,
      [className]: !!className,
    });

    // 默认
    let trigger = (
      <div onMouseEnter={this.onMouseEnter} className={classes} {...otherProps}>
        <div ref={this.saveTextRef} className="fusion-ui-ellipsis-header">
          {children}
        </div>
      </div>
    );

    // 省略号出现在中间
    if (isOverflow && ellipsisPosition === 'middle') {
      const startChildren = children.substr(0, children.length - endCharCount);
      const endChildren = children.substr(-endCharCount);
      trigger = (
        <div className={classes} {...otherProps}>
          <div ref={this.saveTextRef} className="fusion-ui-ellipsis-header">
            {startChildren}
          </div>
          <div className="fusion-ui-ellipsis-footer">{endChildren}</div>
        </div>
      );
    }

    // 出现 Balloon
    if (isOverflow && hasTooltip) {
      return (
        <Tooltip trigger={trigger} {...tooltipProps}>
          {<>{children}</>}
        </Tooltip>
      );
    }

    return trigger;
  }
}

export interface TextClipProps {
  style?: React.CSSProperties;
  className?: string;
  /**
   * 待展示的文本
   */
  children: React.ReactNode;
  /**
   * 最多展示几行文本
   */
  line?: number;
}

export const TextClip: React.FC<TextClipProps> = ({ children, style, line, className }) => {
  return (
    <div className="fusion-ui-text-clip">
      <div
        className={cx([className, 'fusion-ui-text-clip-inner'])}
        style={{ ...style, WebkitLineClamp: line }}
        title={children as string}
      >
        {children}
      </div>
    </div>
  );
};

TextClip.defaultProps = {
  line: 2,
};

TextClip.displayName = 'TextClip';
