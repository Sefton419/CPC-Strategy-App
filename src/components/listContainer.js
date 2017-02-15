import React from 'react';

import List from './list.js'

const styles = {
  listContainer: {}
}

const ListContainer = (props) => {

  return (
    <div className="col-md-8" id="listContainer" style={styles.listContainer}>
      <div></div>
      <List data={props}/>
    </div>
  );
};

export default ListContainer;