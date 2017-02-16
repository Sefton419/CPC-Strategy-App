import React from 'react';

import List from './list.js'

const styles = {
  listContainer: {}
}

const ListContainer = (props) => {

  return (
    <div className="col-md-8" id="listContainer" style={styles.listContainer}>
      <div>this is list container :)</div>
      <List data={props}/>
    </div>
  );
};

export default ListContainer;