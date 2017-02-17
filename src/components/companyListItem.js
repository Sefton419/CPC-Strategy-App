import React from 'react';
import ProductList from './productList.js';
import ProductListItem from './productListItem.js';



const CompanyListItem = ({ company }) => {

  console.log('data in CompanyListItem: ', company);
  const products = company.products.map((product) => {
    console.log(`iterating, product: `, product)
    return (
      <ProductListItem 
        key={product.product_id}
        name={product.product_name}
        image_url={product.product_image_url}
        product={product}
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
          <div className="col-xs-2">Ranks</div>
          <div className="col-xs-2">Progress</div>
          <div className="col-xs-2">Total Avg Score</div>
        </div>
        <div className="row">
          <div>
            {products}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyListItem;