import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import Loading from './loading.js'





const List = ({ data }) => {
  console.log('data in list: ', data);
  const companyItems = data.map((company) => {
    return ( 
      <CompanyListItem 
        className="list-group-item"
        key={company.client_id}
        company={company}
      />
    );
  });

  return (
    <div>
      <ul className="list-group">
        {companyItems}
      </ul>
    </div>
  )
}

export default List;