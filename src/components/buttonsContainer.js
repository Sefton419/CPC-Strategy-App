import React from 'react';

import CompanyButton from './companyButton.js';
import ProductButton from './productButton.js';
import KeywordButton from './keywordButton.js';

const styles = {
  sidebarButtons: {
    width: '100%', 
  },
  button: {
    whiteSpace: 'normal'
  }
}


const ButtonsContainer = ({ buttonData, updateSearchTerm }) => {
  let keyTicker = 1;

  console.log('buttonData in ButtonsContainer: ', buttonData);

  const { companies, products, keywords } = buttonData;
  console.log('companies destructured: ', companies);

  const companyButtons = companies.map(company => (
    <button 
      key={keyTicker++}
      className="btn btn-default" 
      id="width100"
      style={styles.button}
      onClick={() => {
        updateSearchTerm(company)
      }} 
      style={styles.sidebarButtons}
    >
      {company}
    </button> 
  ));
  const productButtons = products.map(product => (
    <button 
      key={keyTicker++}
      className="btn btn-default" 
      id="width100"
      style={styles.button}
      onClick={() => {
        updateSearchTerm(product)
      }} 
      style={styles.sidebarButtons}
    >
      {product}
    </button> 
  ));
  const keywordButtons = keywords.map(keyword => (
    <button 
      key={keyTicker++}
      className="btn btn-default" 
      id="width100"
      style={styles.button}
      onClick={() => {
        updateSearchTerm(keyword)
      }} 
      style={styles.sidebarButtons}
    >  
      {keyword}
    </button> 
  ));

  // method and variables pertaining to clicking buttons in child components
  return (
    <div>
      <h4>Companies</h4>
      <div className="btn-group-vertical" id="width100">
        {companyButtons}
      </div>
      <h4>Products</h4>
      <div className="btn-group-vertical" id="width100">
        {productButtons}
      </div>
      <h4>Keywords</h4>
      <div className="btn-group-vertical" id="width100">
        {keywordButtons}
      </div>
    </div>    
  )
}

export default ButtonsContainer;
