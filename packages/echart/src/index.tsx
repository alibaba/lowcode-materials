
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createElement } from 'react';

import EChart from 'echarts-for-react';

interface EChartsProps {
  option?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
}

export class ECharts extends React.Component<EChartsProps, {
  init: boolean;
}> {
  private chartRef =  React.createRef<ECharts>();
  private chart: ECharts | null = null;

  state = {
    init: false,
  };

  componentDidMount(): void {
    // @ts-ignore
    if (this.props.__designMode === 'design' || this.props._leaf) {
      setTimeout(() => {
        // this.forceUpdate();
        this.setState({ init: true });
      }, 500);
    } else {
      this.setState({ init: true });
    }
  }

  render(): React.ReactNode {
    const { init } = this.state;
    const { option, ...props } = this.props;
    if (!init) return null;
    return (
      <EChart
        // ref={(echart) => {
        //   this.chart = echart;
        // }}
        option={option}
        // canvasId={this.canvasId}
        // onInit={(echart) => {
        //   this.chart = echart;
        // }}
        // option={this.chartOption}
        {...props}
      />
    )
  }
}
