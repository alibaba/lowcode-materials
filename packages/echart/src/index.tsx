// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createElement } from 'react';
import * as echarts from 'echarts';

import EChart from 'echarts-for-react';

interface EChartsProps {
  option?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  advanced?: boolean;
  themeConfig?:object,
  mapName?:string,
  madData?:any
}

export class ECharts extends React.Component<
  EChartsProps,
  {
    init: boolean;
  }
> {
  private chartRef = React.createRef<ECharts>();
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
    const { advanced, option, mapName, mapData,themeConfig, ...props } = this.props;
    echarts.registerTheme(props?.theme||'default', themeConfig||{})

    if (!init) return null;

    if (mapName && mapData) {
      echarts.registerMap(mapName, mapData);
    }

    return advanced ? (
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
    ) : (
      <EChart

        // ref={(echart) => {
        //   this.chart = echart;
        // }}
        option={this.props}
        // canvasId={this.canvasId}
        // onInit={(echart) => {
        //   this.chart = echart;
        // }}
        // option={this.chartOption}
        {...props}
      />
    );
  }
}
