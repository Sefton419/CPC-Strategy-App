import React from 'react';








const RankListItem = ({ rank, position, page, date }) => {

  return (
    <div>
      <li className="list-group-item">
        <ul className="list-Group">
          <div className="list-group-item">Position: {position}</div>
          <div className="list-group-item">Page: {page}</div>
          <div className="list-group-item">Date: {date}</div>
        </ul>
      </li>
    </div>
  );
};

export default RankListItem;