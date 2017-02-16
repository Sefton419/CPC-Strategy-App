import React from 'react';
import KeywordListItem from './keywordListItem.js';

const styles = {
  thumbnail: {
    maxHeight: 50,
  }
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

  console.log(`Keywords for ${name}: `, keywords);

  return (
    <div>
      <li className="list-group-item">
        <div> {name} </div>
        <img 
          className="card-img, img-fluid"
          style={styles.thumbnail}
          src={image_url}
        />
        <ul className="list-group">
          Keywords
          {keywords}
        </ul>
      </li>
    </div>
  );
};

export default ProductListItem;