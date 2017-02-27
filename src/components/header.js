import React, { Component } from 'react';
import SearchBar from './searchBar.js'

const styles = {
  header: {
    color: 'white',
    background: 'black',
    height: 75
  }
}

const Header = ({ state, updateSearchTermFromSearchBar }) => {
  // methods and variables go here...
  return (
    <div className="col-md-12" style={styles.header}>
      <div className="col-md-12">
        CPC Strategy
      </div>
      <div className="row" />
      <SearchBar
        state={state}
        updateSearchTermFromSearchBar={updateSearchTermFromSearchBar}
      />
    </div>

  );
};

export default Header;
