import React, { Component } from 'react';

import ButtonsContainer from './buttonsContainer.js'

const styles = {
  'sidebar': {}
}

const Sidebar = (props) => {

  // method and variable go here...
  
  return (
    <div className="col-xs-2" style={styles.sidebar}>
      <ButtonsContainer />
    </div>
  )
}

export default Sidebar;