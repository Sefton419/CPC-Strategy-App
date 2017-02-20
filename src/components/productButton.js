import React from 'react';

const styles = {
  sidebarButtons: {
    width: '100%', 
  }
}

const ProductButton = ({ product }) => (
  <div>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>{product}</button>  
  </div>
);

export default ProductButton;