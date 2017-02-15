import React, {Component} from 'react';
import axios from 'axios';

import Header from './header.js';
import Sidebar from './sidebar.js';
import ListContainer from './listContainer.js';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  }
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
      <div style={styles.container}>
        <h1>this is appContainer</h1>
        <Header />
        <Sidebar />
        <ListContainer data={this.state.data}/>
      </div>
    )
  }

}

export default AppContainer;