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

const ProductListItem = ({ product, product_name, product_image_url, updateGraphData }) => {

  console.log(`product ${name}: `, product);
  const keywordsDataForGraphs = [];

  const keywords = product.keywords.map((keyword) => {

    // this is for the graphs
    keywordsDataForGraphs.push(keyword.ranks);

    return (
      <KeywordListItem 
        key={keyword.keyword_id}
        keyword_name={keyword.keyword_name}
        keyword_country={keyword.keyword_country}
        keyword={keyword}
      />
    );
  });

  console.log('going to ranksgraph', keywordsDataForGraphs);

  return (
    <div className="row" style={styles.EMPTY}>
        <div className="col-xs-3" style={styles.TE}>
          {product_name}
        </div>
        <div className="col-xs-2" style={styles.EMPTY}>
          {keywords}
        </div>
        <div className="col-xs-4">
          <RanksGraph 
            updateGraphData={updateGraphData}
            graphData={keywordsDataForGraphs}
        />
        </div>
    </div>
  );
};

export default ProductListItem;