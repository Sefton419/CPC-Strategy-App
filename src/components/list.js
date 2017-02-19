import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import Loading from './loading.js'



const List = ({ data }) => {
  console.log('data in list: ', data); 

  const companies = data.map((company) => {
    return (
      <CompanyListItem 
        key={company.client_id}
        company={company}
      />
    );
  });

  return (
    <div>
      {companies}
    </div>
  )
}

export default List;