import React from 'react';
import { Chart }  from 'react-d3-core';
import { LineChart } from 'react-d3-basic';

const styles = {
  TE: {
    borderStyle: 'solid',
    borderWidth: 0.25
  },
  EMPTY: {}
}

const RanksGraph = ({ ranks, updateGraphData, colors }) => {
  console.log('ranks in RanksGraph: ', ranks);
  console.log('ranks function: ', updateGraphData);

  const width = 350*(1.5),
    height = 150*(1.5),
    margins = {left: 50, right: 50, top: 25, bottom: 25},
    title = "User sample";
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line

    const chartSeries = ranks.map((rank, index) => (
      {
        field: 'rank_position',
        name: rank[0],
        color: colors[index]       
      }
    ));

    console.log('chartSeries: ', chartSeries);

    const parseDate = d3.time.format("%Y-%m-%d").parse;
    console.log('I think parseDate is a function: ', parseDate)

    var abc = parseDate("2010-05-22");
    console.log('abc: ', abc);

    const chartData = ranks.map((tuple) => {
      return tuple[1].map((rank) => {
        rank.keyword_name = tuple[0];
        return rank;
      });
    })
    .reduce((arr, rank) => {
      return [...arr, ...rank];
    }, [])
    .sort((a, b) => {
      return new Date(a.rank_date).getTime() - new Date(b.rank_date).getTime();
    });;

    
    console.log('chartData: ', chartData);

    // your x accessor
    const x = function(d) {
      const date = parseDate(d.rank_date);
      console.log('how date looks: ', date);
        return date;
    };

    const xScale = 'time';


  return (
    <div style={styles.TE}>
        <LineChart
          showXGrid= {true}
          showYGrid= {true}
          margins= {margins}
          title={title}
          data={chartData}
          width={width}
          height={height}
          chartSeries={chartSeries}
          x={x}
          xScale={xScale}
        />
    </div>
  );
};

export default RanksGraph;
