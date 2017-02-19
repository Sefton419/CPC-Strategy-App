import React from 'react';

import CompanyButtons from './companyButtons.js';
import ProductButtons from './productButtons.js';
import KeywordButtons from './keywordButtons.js';

const styles = {
  sidebarButtons: {
    width: '100%', 
  }
}

const ButtonsContainer = (props) => {

  // method and variables pertaining to clicking buttons in child components
  return (
    <div>
      <h4>Companies</h4>
      <CompanyButtons />
      <h4>Products</h4>
      <ProductButtons />
      <h4>Keywords</h4>
      <KeywordButtons />
    </div>    
  )
}

export default ButtonsContainer;
