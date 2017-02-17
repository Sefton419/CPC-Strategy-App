import React from 'react';


const RankListItem = ({ rank, position, page, date }) => {

  return (
    <div className="row">
      <div className="col-xs-5">Position: {position}</div>
    </div>
  );
};

export default RankListItem;