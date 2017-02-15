import React, { Component } from 'react';

import List from './list.js'

class ListContainer extends Component {
  render() {
    return (
      <div>
        <h1>this is ListContainer</h1>
        <List />
      </div>
    )
  }
}

export default ListContainer;