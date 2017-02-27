import React from 'react';

import KeywordListItem from './keywordListItem.js';
import RankListItem from './rankListItem.js';
import RanksGraph from './ranksGraph.js'



const styles = {
  TE: {
    borderStyle: 'solid',
    borderWidth: 0.25
  },
  margin: {
    marginBottom: 10
  },
  offWhite: {
    backgroundColor:'#EEEEEE',
  },
  EMPTY: {}
}

const ProductListItem = ({ product, product_name, product_image_url, updateButtonsData, pushCurrentQueryString }) => {

  updateButtonsData(product.keywords); 

  const lineColors = [
    '#5068A5',
    '#F1666D',
    '#53C453',
    '#844AA4',
    '#F5A868',
    '#C65492'
  ]

  const keywordsDataForGraphs = [];

  console.log('about to map in productlistitem')

  const keywords = product.keywords.map((keyword) => {
    // this is for the graphs
    keywordsDataForGraphs.push([keyword.keyword_name, keyword.ranks]);
    return (
      <KeywordListItem 
        key={keyword.keyword_id}
        keyword_name={keyword.keyword_name}
        keyword_country={keyword.keyword_country}
        keyword={keyword}
        pushCurrentQueryString={pushCurrentQueryString}
      />
    );
  });

  return (
    <div className="row" style={styles.margin}>
        <div className="col-xs-3" style={styles.EMPTY}>
          {product_name}
        </div>
        <div className="col-xs-2">
          {keywords}
        </div>
        <div className="col-xs-5">
          <RanksGraph 
            ranks={keywordsDataForGraphs}
            lineColors={lineColors}
        />
        </div>
    </div>
  );
};

export default ProductListItem;
