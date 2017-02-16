import React, {Component} from 'react';
import axios from 'axios';

import DATAURL from '../constants/constants.js'
import Header from './header.js';
import Sidebar from './sidebar.js';
import ListContainer from './listContainer.js';
import Loading from './loading.js'

const styles = {
  container: {}
};

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      dataLoading: true,
      dataUrl: DATAURL
    }
  }

  componentWillMount() {
    // axios GET call to retrieve data and set to state
    const { dataUrl, data } = this.state;

    console.log('This is data initially: ', data)

    if (data === null) {
      this.state.data = axios.get(dataUrl)
      .then((resp) => {
        this.state.data = resp.data;
      })
      .then((resp) => {
        console.log('data mapped to state: ', this.state.data);
        console.log('length of data: ', this.state.data.length);
        this.setState({ dataLoading: false });
        console.log('dataLoading is now... ', this.state.dataLoading);
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
          {this.state.dataLoading ? <Loading /> : <ListContainer data={this.state.data} />}
        </div>
      </div>
    )
  }

}

export default AppContainer;