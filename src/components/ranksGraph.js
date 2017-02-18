import React from 'react';
import { Chart, LineChart }  from 'react-d3-core';




const RanksGraph = ({ graphData }) => {

  const width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }

    /*
<Chart
  title={title}
  width={width}
  height={height}
  margins= {margins}
  >
  <LineChart
    showXGrid= {false}
    showYGrid= {false}
    margins= {margins}
    title={title}
    data={chartData}
    width={width}
    height={height}
    chartSeries={chartSeries}
    x={x}
  />
</Chart>
    */

  console.log('graphData in graph component: ', graphData);

  return (
    <div>We're cool</div>
  );
};

export default RanksGraph;