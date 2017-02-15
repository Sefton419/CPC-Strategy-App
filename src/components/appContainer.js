import React, {Component} from 'react';
import axios from 'axios';

import Header from './header.js';
import Sidebar from './sidebar.js';
import ListContainer from './listContainer.js';

const styles = {
  container: {}
};

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      dataUrl: 'http://frontendtest.cpcstrategy.com/'
    }
  }

  componentWillMount() {
    // axios GET call to retrieve data and set to state
    if (this.state.dataUrl !== null) {
      this.state.data = axios.get(this.state.dataUrl)
      .then((response) => {
        this.state.data = response;
      })
      .then((data) => {
        console.log('data mapped to state: ', this.state.data);
      })
      .catch((error) => {
        console.log('Something did not work right');
      });
    }
  }

  render() {
    return (
      <div className="container-fluid" style={styles.container}>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Sidebar />
          <ListContainer data={this.state.data}/>
        </div>
      </div>
    )
  }

}

export default AppContainer;