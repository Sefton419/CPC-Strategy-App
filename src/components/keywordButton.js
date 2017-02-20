import React from 'react';

const styles = {
  sidebarButtons: {
    width: '100%', 
  }
}

const KeywordButton = ({ keyword }) => (
  <div>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>{keyword}</button>  
  </div>
);

export default KeywordButton;