import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, Caption
} from 'react-jsx-highcharts';

const plotOptions = {
  series: {
    pointStart: 2010
  }
};

const App = ({bgColor}: any) => (
  <div className="app">
    <HighchartsChart plotOptions={plotOptions}>
      <Chart backgroundColor={bgColor}/>
      <Title></Title>
      <Subtitle></Subtitle>
      <XAxis>
        <XAxis.Title></XAxis.Title>
      </XAxis>

      <YAxis>
        <YAxis.Title></YAxis.Title>
          <LineSeries name="Installation" data={[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]} />
        </YAxis>
      <Caption align="center"></Caption>
    </HighchartsChart>

  </div>
);

export default withHighcharts(App, Highcharts);