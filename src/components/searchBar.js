import React from 'react';



const SearchBar = ({ props }) => {
  
  return (

    <div className="row">
    <div className="col-md-2" />
      <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
            <input type="text" className="form-control" placeholder="Search for..." />
          </div>
      </div>
    </div>
  )
};

export default SearchBar;