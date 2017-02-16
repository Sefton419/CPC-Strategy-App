import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import ProductListItem from './ProductListItem.js'
import KeywordListItem from './KeywordListItem.js'
import Loading from './loading.js'

const List = ({ data }) => {
  console.log('data in list: ', data);
  // Methods and variables go here...

  return (
    <div>
      <CompanyListItem data={data}/>
      <ProductListItem />
      <KeywordListItem />
    </div>
  )
}

export default List;