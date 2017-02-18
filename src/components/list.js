import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import Loading from './loading.js'



const List = ({ data, updateGraphData }) => {
  console.log('data in list: ', data); 
  console.log('updateGraphData in list: ', updateGraphData);

  const companies = data.map((company) => {
    return (
      <CompanyListItem 
        key={company.client_id}
        company={company}
        updateGraphData={updateGraphData}
      />
    );
  });

  return (
    <div className="container-fluid">
      {companies}
    </div>
  )
}

export default List;