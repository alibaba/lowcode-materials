
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { createElement } from 'react';

import { EChart } from 'echarts-taro3-react';
import * as echarts from 'echarts-taro3-react/lib/ec-canvas/echarts';

export class ECharts extends React.Component {
  canvasId = 'canvas1';
  private chartRef =  React.createRef<ECharts>();
  private chart: echarts.ECharts | null = null;
  private chartOption: echarts.EChartsOption = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    }
  }

  render(): React.ReactNode {
    return (
      <EChart
        ref={(echart) => {
          this.chart = echart;
        }}
        canvasId={this.canvasId}
        // onInit={(echart) => {
        //   this.chart = echart;
        // }}
        // option={this.chartOption}
      />
    );
  }
}
