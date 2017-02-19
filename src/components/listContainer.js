import React from 'react';

import List from './list.js'

const styles = {
  listContainer: {}
}

const ListContainer = ({ data, updateGraphData }) => {
  console.log('data in list container: ', data);
  return (
    <div className="col-xs-10" style={styles.listContainer}>
    <h4>TESTING</h4>
      <List 
        data={data}
        updateGraphData={updateGraphData}
      />
    </div>
  );
};

export default ListContainer;