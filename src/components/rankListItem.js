import React from 'react';








const RankListItem = ({ rank, position, page, date }) => {

  return (
    <div>
      <div className="col-xs-2">Position: {position}</div>
      <div className="col-xs-2">Page: {page}</div>
      <div className="col-xs-2">Date: {date}</div>
    </div>
  );
};

export default RankListItem;