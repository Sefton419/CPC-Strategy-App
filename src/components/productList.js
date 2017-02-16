import React from 'react';

const ProductList = ({ products }) => {
  console.log('data in productList: ', productList);

  return (
    <div>
      <ul>
        {products}
      </ul>
    </div>
  )
};

export default ProductList;

// Am I using this?