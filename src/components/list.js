import React, { Component } from 'react';

import CompanyListItem from './CompanyListItem.js'
import ProductListItem from './ProductListItem.js'
import KeywordListItem from './KeywordListItem.js'
import Loading from './loading.js'

const List = () => {

  // Methods and variables go here...

  return (
    <div>
      <h1>this is List</h1>
      <CompanyListItem />
      <ProductListItem />
      <KeywordListItem />
      <Loading />
    </div>
  )
}

export default List;