import React from 'react';

import KeywordListItem from './keywordListItem.js';
import RankListItem from './rankListItem.js';


const styles = {
  thumbnail: {
    maxHeight: 50,
  },
  productListItem: {}
}

const ProductListItem = ({ product, name, image_url }) => {
  console.log(`product ${name}: `, product)
  const keywords = product.keywords.map((keyword) => {
    return (
      <KeywordListItem 
        key={keyword.keyword_id}
        name={keyword.keyword_name}
        country={keyword.keyword_country}
        keyword={keyword}
      />
    );
  });

  return (
    <div className="row" style={styles.productListItem}>
     <div className="col-xs-11">
        <div className ="col-xs-3">{name}</div>
        <div className="col-xs-8">
          {keywords}
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;