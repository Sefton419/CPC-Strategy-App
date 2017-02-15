import React, { Component } from 'react';

import ButtonsContainer from './buttonsContainer.js'

const styles = {
  'sidebar': {
    backgroundColor: '#f7f7f9'
  }
}

const Sidebar = (props) => {

  // method and variable go here...
  
  return (
    <div className="col-md-2" style={styles.sidebar}>
      <ButtonsContainer />
    </div>
  )
}

export default Sidebar;