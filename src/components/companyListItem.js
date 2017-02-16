import React from 'react';
import ProductList from './productList.js';
import ProductListItem from './productListItem.js';






const CompanyListItem = ({ company }) => {
  console.log('data in CompanyListItem: ', company);
  const products = company.products.map((product) => {
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
    <div>
      <li className="list-group-item">
        <div className="media-heading">
          {company.client_name}
        </div>
        <ul>
          Products
          {products}
        </ul>
      </li>
    </div>
  );
};

export default CompanyListItem;