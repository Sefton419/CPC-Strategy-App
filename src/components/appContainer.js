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

    this.getCompaniesData = this.getCompaniesData.bind(this);
    this.getProductsData = this.getProductsData.bind(this);
    this.getKeywordsData = this.getKeywordsData.bind(this);
  }

  componentWillMount() {
    // axios GET call to get data and organize on state
    if (this.state.dataUrl !== null) {
      this.state.data = axios.get(this.state.dataUrl)
      .then((response) => {
        console.log('data mapped to state');
      })
      .catch((error) => {
        console.log('Something did not work right');
      });
    }
  }

  componentDidMount() {
    // provide accurate data to
    console.log('This is data on state: ' + this.state.data); 
  }

  getCompaniesData() {}

  getProductsData() {}

  getKeywordsData() {}

  render() {
    return (
      <div style={styles.container}>
        <h1>this is appContainer</h1>
        <Header />
        <Sidebar />
        <ListContainer />
      </div>
    )
  }

}

export default AppContainer;