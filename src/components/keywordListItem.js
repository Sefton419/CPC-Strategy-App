import React from 'react';

import RankListItem from './rankListItem.js';
import RanksGraph from './ranksGraph.js'



const KeywordListItem = ({ keyword, name, country }) => {
  const graphData = keyword.ranks.map(rank => rank);
  console.log('this is mapped graphData: ', graphData)
  // const ranks = keyword.ranks.map((rank) => {
  //   return (
  //     <RankListItem 
  //       key={rank.rank_id}
  //       position={rank.rank_position}
  //       page={rank.rank_page}
  //       date={rank.rank_date}
  //     />
  //   );
  // });

  return (
    <div className="row">
      <div className="col-xs-4">
        {name}
      </div>
      <div className="col-xs-6">
        <RanksGraph />
      </div>
    </div>
  );
};

export default KeywordListItem;