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
      dataUrl: DATAURL,
      graphData: null,
      companyButtons: {},
      productButtons: {},
      keywordButtons: {},  
      buttonsLoading: true,
    }

    this.updateButtonsData = this.updateButtonsData.bind(this);   

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
        console.log('ERROR in mapping data');
      });
    }
  }

  updateButtonsData(d) {
    console.log('updateButtonsData envoked');
    console.log('this.state.buttons: ', this.state.buttons)
    const index = {};
    // check to see whether dealing with companies, products, or keywords
    if (d[0].client_name !== undefined) {
      const companyButtons = d.reduce((clientNames, company) => {
        const { client_name } = company;
        if(index.client_name === undefined) {
          index[client_name] = true;
          clientNames.push(client_name);
          return clientNames;
        } 
      }, []);
      console.log('companyButtons: ', companyButtons);
      // this.setState({companyButtons: companyButtons });
      // console.log('this is this.state.buttons.companies, fucker: ', this.state.companyButtons)
    }
    if (d[0].product_name !== undefined) {
      const productButtons = d.reduce((productNames, product) => {
        const { product_name } = product;
        if(index.product_name === undefined) {
          index[product_name] = true;
          productNames.push(product_name);
          return productNames;
        } 
      }, []);
      console.log('productButtons: ', productButtons);
      // this.setState({/* can I use this const?*/ buttons: productButtons });
    }
    if (d[0].keyword_name !== undefined) {
      const keywordButtons = d.reduce((keywordNames, keyword) => {
        const { keyword_name } = keyword;
        if(index.keyword_name === undefined) {
          index[keyword_name] = true;
          keywordNames.push(keyword_name);
          return keywordNames;
        } 
      }, []);
      console.log('keywordButtons: ', keywordButtons);
      // this.setState({/* can I use this const?*/ buttons: companyButtons, buttonsLoading: false }); 
    }
  }

  render() {

    this.updateButtonsData([{client_name: 'hello'}, {client_name: 'hello'}, {client_name: 'goodbye'}])

    return (
      <div className="container-fluid" style={styles.container}>
        <div className="row">
          <Header />
        </div>
        <div className="row">
          {this.state.buttonsLoading ? <Sidebar /> : <Sidebar buttonData={this.state.buttons} />}
          {this.state.dataLoading ? <Loading /> : <ListContainer data={this.state.data} state={this.state} updateButtonsData={this.updateButtonsData} />}
        </div>
      </div>
    )
  }

}

export default AppContainer;