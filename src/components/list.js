import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import Loading from './loading.js'



const List = ({ data, state, updateButtonsData }) => {
  console.log('data in list: ', data); 

  updateButtonsData(data);

  const companies = data.map((company) => {
    return (
      <CompanyListItem 
        key={company.client_id}
        company={company}
        updateButtonsData={updateButtonsData}
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