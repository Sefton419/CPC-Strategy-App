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
      searchTerm: ''
    }

    this.companiesIndex = {};
    this.productsIndex = {};
    this.keywordsIndex = {};  

    this.updateButtonsData = this.updateButtonsData.bind(this);
    this.handleIndexData = this.handleIndexData.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    
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
      .then((resp) =>{
        // for buttons
        this.handleIndexData()
      })
      .catch((error) => {
        console.log('ERROR in mapping data');
      });
    }
  }

  updateButtonsData(d) {    
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
    }
    if (d[0].product_name !== undefined) {
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
    }
    if (d[0].keyword_name !== undefined) {
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
    }
  }

  handleIndexData() {

    const sortNames = (names) => {
      return names.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    };

    let companyIndexNames = sortNames(Object.keys(this.companiesIndex));
    let productIndexNames = sortNames(Object.keys(this.productsIndex)); 
    let keywordIndexNames = sortNames(Object.keys(this.keywordsIndex));

    // reset index variables
    this.companiesIndex = {};
    this.productsIndex = {};
    this.keywordsIndex = {};

    let companyButtons = this.state.buttons;

    companyButtons.companies = companyIndexNames;
    companyButtons.products = productIndexNames;
    companyButtons.keywords = keywordIndexNames;

    this.setState({
      buttons: companyButtons,
      buttonsLoading: false
    });

    console.log('did it work in axios call?');
    console.log('--this.state.buttons.companies: ', this.state.buttons.companies);
    console.log('--this.state.buttons.products: ', this.state.buttons.products);
    console.log('--this.state.buttons.keywords: ', this.state.buttons.keywords); 
  }

  updateSearchTerm(term) {
    console.log(`${term} button worked!`);
    this.setState({searchTerm: term}, function(data) {
      console.log('HERE SEARCHTERM IS!!!: ', this.state.searchTerm)
    });
  }

  render() {

    return (
      <div className="container-fluid" id="appContainer" style={styles.container}>
        <div className="row">
          <Header />
        </div>
        <div className="row" id="appContainer">
          {this.state.buttonsLoading ? <Loading /> : <Sidebar buttonData={this.state.buttons} updateSearchTerm={this.updateSearchTerm} />}
          {this.state.dataLoading ? <Loading /> : <ListContainer data={this.state.data} state={this.state} updateButtonsData={this.updateButtonsData} />}
        </div>
      </div>
    )
  }
}

export default AppContainer;