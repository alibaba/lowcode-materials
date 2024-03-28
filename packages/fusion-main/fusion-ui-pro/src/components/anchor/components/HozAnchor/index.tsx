import * as React from 'react';
import cx from 'classnames';
import { Affix } from '@alifd/next';
import { Segment } from '@/components/segment';
import { AnchorProps } from '../../index';
import { startListen, removeListen, jumpToNode } from '../../util';

export class HozAnchor extends React.Component<Omit<AnchorProps, 'direction'>> {
  state = {
    currentValue: '',
    container: null,
  };

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

  updateCurrentValue = (newValue) => {
    this.setState({
      currentValue: newValue,
    });
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
    const { dataSource, className, style, hasAffix, affixProps } = this.props;
    const { container } = this.state;
    const { currentValue } = this.state;

    const classes = cx({
      'fusion-ui-anchor-hoz': true,
      [className]: !!className,
    });

    const segmentDataSource = dataSource.map((item) => ({
      label: item.label,
      value: item.htmlId,
    }));

    const anchorEl = (
      <div style={style} className={classes}>
        <Segment
          size="large"
          type="primary"
          value={currentValue}
          dataSource={segmentDataSource}
          onChange={this.onChange}
        />
      </div>
    );

    if (hasAffix) {
      return (
        <Affix className="fusion-ui-anchor-hoz-affix" container={() => container} {...affixProps}>
          {anchorEl}
        </Affix>
      );
    }

    return anchorEl;
  }
}
