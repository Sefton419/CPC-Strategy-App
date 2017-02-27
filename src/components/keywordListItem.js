import React from 'react';

import RankListItem from './rankListItem.js';

const styles = {
  TE: {
    borderStyle: 'solid',
    borderWidth: 0.25
  },
  positive : {
    color: 'green'
  },
  negative: {
    color: 'red'
  },
  neutral: {},
  EMPTY: {}
}

const KeywordListItem = ({ keyword, keyword_name, keyword_country }) => {

  let recentRankDifference = 0;
  console.log('keyword.ranks: ', keyword.ranks)
  const sortedRanks = keyword.ranks.sort((a, b) => {
    console.log('iterating inside sortedRanks')
      return new Date(a.rank_date).getTime() - new Date(b.rank_date).getTime();
    });

  console.log('sortedRanks: ', sortedRanks);

  let lastInd = sortedRanks.length - 1;

  if (sortedRanks.length > 1) {
    recentRankDifference = sortedRanks[lastInd - 1].rank_position - sortedRanks[lastInd].rank_position;
  }
  
  console.log(`for keyword ${keyword_name}, recent rank difference is ${recentRankDifference}`);

  let numberStyle = styles.neutral;

  if (recentRankDifference < 0) {
    numberStyle = styles.negative;
  } else if (recentRankDifference > 0) {
    numberStyle = styles.positive;
  } else {
    numberStyle = styles.neutral;
  }

  return (
    <div>
    <div className="row">
        <div className="col-xs-8">{keyword_name}</div> 
        <div className="col-xs-4" style={numberStyle}>{recentRankDifference}</div>
    </div>
    </div>
  );
};

export default KeywordListItem;