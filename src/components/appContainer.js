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
      buttons: {
        companies: [],
        products: [],
        keywords: []
      },
      buttonsLoading: true,
    }

    this.companiesIndex = {};
    this.productsIndex = {};
    this.keywordsIndex = {};  

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

  componentDidMount() {

  }

  updateButtonsData(d) {
    console.log('updateButtonsData envoked');
    console.log('here is data: ', d)
    console.log('this.companiesIndex: ', this.companiesIndex)
    
    const index = {};
    // check to see whether dealing with companies, products, or keywords
    if (d[0].client_name !== undefined) {
      const companyButtons = d.reduce((clientNames, company) => {
        const { client_name } = company;
        if(this.companiesIndex.client_name === undefined) {
          this.companiesIndex[client_name] = 1;
          clientNames.push(client_name);
          return clientNames;
        } else {
          this.companiesIndex[product_name]++;
        }
      }, []);
      console.log('companyButtons: ', companyButtons);
      // this.setState({companyButtons: companyButtons });
      // console.log('this is this.state.buttons.companies, fucker: ', this.state.companyButtons)
    }
    console.log('NEAR PRODUCTS!!!!');
    if (d[0].product_name !== undefined) {
      console.log('INSIDE PRODUCTS!!!!');
      const productButtons = d.reduce((productNames, product) => {
        const { product_name } = product;
        if(this.productsIndex.product_name === undefined) {
          this.productsIndex[product_name] = 1;
          productNames.push(product_name);
          return productNames;
        } else {
          this.productsIndex[product_name]++;
        }
      }, []);
      console.log('this.productsIndex: ', this.productsIndex);
      // this.setState({/* can I use this const?*/ buttons: productButtons });
    }
    console.log('NEAR KEYWORDS!!!!');
    if (d[0].keyword_name !== undefined) {
      console.log('INSIDE KEYWORDS!!!!');
      const keywordButtons = d.reduce((keywordNames, keyword) => {
        const { keyword_name } = keyword;
        if(this.keywordsIndex.keyword_name === undefined) {
          this.keywordsIndex[keyword_name] = 1;
          keywordNames.push(keyword_name);
          return keywordNames;
        } else {
          this.keywordIndex[product_name]++;
        } 
      }, []);
      console.log('this.keywordsIndex: ', this.keywordsIndex);
      // this.setState({/* can I use this const?*/ buttons: companyButtons, buttonsLoading: false }); 
    }
  }

  render() {

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