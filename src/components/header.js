import React, { Component } from 'react';

const styles = {
  header: {
    color: 'white',
    background: 'black',
    height: 75
  }
}

const Header = () => {

  // methods and variables go here...

  return (
    <div className="col-md-12" style={styles.header}>
      CPC Strategy
    </div>
  )
}

export default Header;
