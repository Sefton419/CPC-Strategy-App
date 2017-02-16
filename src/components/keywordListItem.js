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
      <li className="list-group-item">
        <div>{name}</div>
        <div>{country}</div>
        <ul className="list-group">
          {ranks}
        </ul>
      </li>
    </div>
  );
};

export default KeywordListItem;