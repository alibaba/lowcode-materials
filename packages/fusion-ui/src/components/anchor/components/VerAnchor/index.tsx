import * as React from 'react';
import cx from 'classnames';
import { CustomIcon } from '@/components/toggle-icon';
import { AnchorProps } from '../../index';
import { startListen, removeListen, jumpToNode } from '../../util';
import { AnchorList } from './AnchorList';

export class VerAnchor extends React.Component<Omit<AnchorProps, 'direction'>> {
  static displayName = 'Anchor';

  static defaultProps = {
    defaultVisible: true,
  };

  state = {
    currentValue: '',
    visible: this.props.defaultVisible,
    container: null,
  };

  prefix = 'fusion-ui-anchor-ver';

  componentDidMount() {
    const { dataSource, container, offsetY } = this.props;
    const _container = container();
    startListen(dataSource, () => _container, this.updateCurrentValue, {
      offsetY,
    });
    this.setState({
      container: _container,
    });
  }

  componentWillUnmount() {
    const { dataSource } = this.props;
    const { container } = this.state;
    removeListen(dataSource, () => container);
  }

  changeMenuStatus = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  updateCurrentValue = (newValue) => {
    this.setState({
      currentValue: newValue,
    });
  };

  handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  onChange = (newValue) => {
    const { onChange } = this.props;
    const status = onChange && onChange(newValue);
    if (status !== false) {
      this.setState({
        currentValue: newValue,
      });
      jumpToNode(newValue);
    }
  };

  render() {
    const { className, style, dataSource, scrollTop } = this.props;
    const { currentValue, visible } = this.state;
    const classes = cx({
      [this.prefix]: true,
      [`${this.prefix}-expand`]: visible,
      [className]: !!className,
    });

    return (
      <div className={classes} style={style}>
        <div
          className={`${this.prefix}-header ${this.prefix}-button`}
          onClick={this.changeMenuStatus}
        >
          <CustomIcon type="ic_bullet" />
        </div>
        <div className={`${this.prefix}-body`}>
          <div className={`${this.prefix}-mask`} />
          <AnchorList dataSource={dataSource} value={currentValue} onSelect={this.onChange} />
        </div>
        <div className={`${this.prefix}-footer ${this.prefix}-button`}>
          <a onClick={scrollTop}>
            <CustomIcon type="up" className="anchor-up" />
          </a>
        </div>
      </div>
    );
  }
}
