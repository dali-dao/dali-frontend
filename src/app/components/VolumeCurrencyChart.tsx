import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My stock chart"
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ],
  colors: ['#2f7ed8']
};

export const VolumeCurrencyChart = () => (
  <div>
    <HighchartsReact
      colors='red'
      style={{background: 'grey'}}
      highcharts={Highcharts}
      options={options}
    />
  </div>
);

render(<VolumeCurrencyChart />, document.getElementById("root"));
