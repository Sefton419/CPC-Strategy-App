import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import Loading from './loading.js'



const List = ({ data, state, updateButtonsData, addCompanyArrayToQueryStrings }) => {
  // console.log('data in list: ', data); 

  updateButtonsData(data);
  // console.log('updateButtonsData envoked');

  const companies = data.map((company) => {
    // console.log('mapping in list: ', company.client_id);
    return (
      <CompanyListItem 
        key={company.client_id}
        company={company}
        updateButtonsData={updateButtonsData}
        addCompanyArrayToQueryStrings={addCompanyArrayToQueryStrings}
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