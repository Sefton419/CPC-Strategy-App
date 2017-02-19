import React from 'react';

import RankListItem from './rankListItem.js';

const styles = {
  TE: {
    borderStyle: 'solid',
    borderWidth: 0.25
  },
  EMPTY: {}
}

const KeywordListItem = ({ keyword, keyword_name, keyword_country, colors }) => {
  // console.log('state: ', this.state);

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
    <div className="row" style={styles.EMPTY}>
      <div className="col-xs-2" style={styles.EMPTY}>
        {keyword_name}
      </div>
    </div>
  );
};

export default KeywordListItem;