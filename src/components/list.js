import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import Loading from './loading.js'





const List = ({ data }) => {
  console.log('data in list: ', data);
  const companies = data.map((company) => {
    return ( 
      <CompanyListItem 
        className="list-group-item"
        key={company.client_id}
        company={company}
      />
    );
  });

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h1 className="panel-title">Companies</h1>
      </div>
      <div className="panel-body">
        {companies}
      </div>
    </div>
  )
}

export default List;