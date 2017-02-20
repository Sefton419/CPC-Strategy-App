import React from 'react';

import KeywordListItem from './keywordListItem.js';
import RankListItem from './rankListItem.js';
import RanksGraph from './ranksGraph.js'



const styles = {
  TE: {
    borderStyle: 'solid',
    borderWidth: 0.25
  },
  EMPTY: {}
}

const ProductListItem = ({ product, product_name, product_image_url, updateButtonsData, pushCurrentQueryString }) => {

  updateButtonsData(product.keywords); 

  const colors = [
    '#5068A5',
    '#F1666D',
    '#53C453',
    '#844AA4',
    '#F5A868',
    '#C65492'
  ]

  console.log('product: ', product);
  const keywordsDataForGraphs = [];

  const keywords = product.keywords.map((keyword) => {
    // this is for the graphs
    keywordsDataForGraphs.push([keyword.keyword_name, keyword.ranks]);
    return (
      <KeywordListItem 
        key={keyword.keyword_id}
        keyword_name={keyword.keyword_name}
        keyword_country={keyword.keyword_country}
        keyword={keyword}
        colors={colors}
        pushCurrentQueryString={pushCurrentQueryString}
      />
    );
  });

  return (
    <div className="row" style={styles.EMPTY}>
        <div className="col-xs-3" style={styles.EMPTY}>
          {product_name}
        </div>
        <div className="col-xs-2" style={styles.EMPTY}>
          {keywords}
        </div>
        <div className="col-xs-5">
          <RanksGraph 
            ranks={keywordsDataForGraphs}
            colors={colors}
        />
        </div>
    </div>
  );
};

export default ProductListItem;