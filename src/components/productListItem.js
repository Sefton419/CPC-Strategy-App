import React from 'react';

import KeywordListItem from './keywordListItem.js';
import RankListItem from './rankListItem.js';


const styles = {
  TE: {
    borderStyle: 'solid',
    borderWidth: 0.25
  },
  EMPTY: {}
}

const ProductListItem = ({ product, product_name, product_image_url }) => {
  console.log(`product ${name}: `, product)
  const keywords = product.keywords.map((keyword) => {
    return (
      <KeywordListItem 
        key={keyword.keyword_id}
        keyword_name={keyword.keyword_name}
        keyword_country={keyword.keyword_country}
        keyword={keyword}
      />
    );
  });

  return (
    <div className="row" style={styles.EMPTY}>
        <div className="col-xs-7" style={styles.EMPTY}>{product_name}</div>
        <div className="col-xs-2" style={styles.EMPTY}>
          {keywords}
        </div>
    </div>
  );
};

export default ProductListItem;