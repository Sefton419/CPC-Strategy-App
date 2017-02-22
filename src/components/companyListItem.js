import React from 'react';
import ProductListItem from './productListItem.js';


const styles = {
  TE: {
    borderStyle: 'solid',
    borderWidth: 0.25
  },
  EMPTY: {}
}

const CompanyListItem = ({ company, updateButtonsData, addCompanyArrayToQueryStrings, pushCurrentQueryString }) => {
  console.log('inside companyListItem');
  addCompanyArrayToQueryStrings(company.client_name);

  console.log('addCompanyArrayToQueryStrings envoked')

  updateButtonsData(company.products);
  // pushCurrentQueryString();
  
  const products = company.products.map((product) => {
    return (
      <ProductListItem 
        key={product.product_id}
        product_name={product.product_name}
        product_image_url={product.product_image_url}
        product={product}
        updateButtonsData={updateButtonsData}
        pushCurrentQueryString={pushCurrentQueryString}
      />
    );
  });

  console.log(`Products for ${company.client_name}: `, products);

  return (
    <div className="panel panel-default">
      <h2 className="panel-title">
        {company.client_name} 
      </h2>   
      <div className="panel-body">
        <div className="row">
          <div className="col-xs-3">Product</div>
          <div className="col-xs-2">Keywords</div>
          <div className="col-xs-7">Chart</div>
        </div>
        <div className="row">
          <div className="col-xs-12" style={styles.EMPTY}>
            {products}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyListItem;