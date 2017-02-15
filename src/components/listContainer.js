import React from 'react';

import List from './list.js'

const ListContainer = (props) => {

  return (
    <div>
      <h1>this is ListContainer</h1>
      <div></div>
      <List data={props}/>
    </div>
  );
};

export default ListContainer;