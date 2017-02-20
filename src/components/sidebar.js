import React, { Component } from 'react';

import ButtonsContainer from './buttonsContainer.js'

const styles = {
  'sidebar': {}
}

const Sidebar = ({ buttonData }) => {
  console.log('buttonData in SideBar: ', buttonData);
  // method and variable go here...
  
  return (
    <div className="col-xs-2" style={styles.sidebar}>
      <ButtonsContainer buttonData={buttonData} />
    </div>
  )
}

export default Sidebar;