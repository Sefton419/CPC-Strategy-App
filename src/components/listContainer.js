import React from 'react';

import List from './list.js'

const styles = {
  listContainer: {}
}

const ListContainer = ({ data }) => {
  console.log('data in list container: ', data);
  return (
    <div className="col-md-8" id="listContainer" style={styles.listContainer}>
      <List data={data}/>
    </div>
  );
};

export default ListContainer;