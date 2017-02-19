import React, { Component } from 'react';
import SearchBar from './searchBar.js'

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
      <div className="col-md-12">
        CPC Strategy
      </div>
      <div className="row" />
     <SearchBar />
    </div>

  );
};

export default Header;
