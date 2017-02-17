import React from 'react';

import RankListItem from './rankListItem.js';






const KeywordListItem = ({ keyword, name, country }) => {
  const ranks = keyword.ranks.map((rank) => {
    return (
      <RankListItem 
        key={rank.rank_id}
        position={rank.rank_position}
        page={rank.rank_page}
        date={rank.rank_date}
      />
    );
  });

  return (
    <div>
      <div className="col-xs-2">
        name: {name}
      </div> 
      <div>
        country: {country}
      </div>

      <div className="row">
        {ranks}
      </div>
    </div>
  );
};

export default KeywordListItem;