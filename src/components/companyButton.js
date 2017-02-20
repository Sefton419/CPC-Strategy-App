import React from 'react';

const styles = {
  sidebarButtons: {
    width: '100%', 
  }
}

const CompanyButton = ({ company }) => (
  <div>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>{company}</button>  
  </div>
);

export default CompanyButton;