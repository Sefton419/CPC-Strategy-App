import React, {Component} from 'react';
import axios from 'axios';

import DATAURL from '../constants/constants.js'
import DATA from '../constants/data.js'
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
      searchTerm: null,
      companiesQueryStrings: null
    }

    this.firstCompanyPassedOver = false
    this.companiesQueryArrayIndex = 0;
    this.companiesQueryStrings = [];

    this.companiesIndex = {};
    this.productsIndex = {};
    this.keywordsIndex = {};  

    this.updateButtonsData = this.updateButtonsData.bind(this);
    this.handleIndexData = this.handleIndexData.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.addCompanyArrayToQueryStrings = this.addCompanyArrayToQueryStrings.bind(this);
    this.pushCurrentQueryString = this.pushCurrentQueryString.bind(this);
    this.handleQueryData = this.handleQueryData.bind(this);
    this.applySearchFilter = this.applySearchFilter.bind(this);
    
  }

  componentWillMount() {
    // axios GET call to retrieve data and set to state
    const { dataUrl, data } = this.state;

    // empties and resets query data
    this.companiesQueryStrings.length = 0;
    this.companiesQueryArrayIndex = 0;
    this.firstCompanyPassedOver = false;
    

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
        this.handleIndexData();
        this.handleQueryData(this.companiesQueryStrings);
      })
      // .then((resp) => {

      // })
      .catch((error) => {
        console.log('ERROR in mapping data');
      });
    }
  }

  componentWillUpdate() {
    if (this.state.searchTerm !== null) {
      this.applySearchFilter(this.state.data)
    }
    console.log('COMPONENT UPDATED: ', this.state.data);
  }

  updateButtonsData(d) {    
    // check to see whether dealing with companies, products, or keywords
    if (d[0].client_name !== undefined) {
      const companyNames = d.reduce((clientNames, company) => {
        const { client_name } = company;
        if(this.companiesIndex.client_name === undefined) {
          this.companiesIndex[client_name] = 1;
          clientNames.push(client_name);
          return clientNames;
        } else {
          this.companiesIndex[product_name]++;
        }
      }, []);
      this.companiesIndex = {};
    }
    if (d[0].product_name !== undefined) {
      const productItemNames = d.reduce((productNames, product) => {
        const { product_name } = product;
        if(this.productsIndex.product_name === undefined) {
          this.productsIndex[product_name] = 1;
          productNames.push(product_name);
          return productNames;
        } else {
          this.productsIndex[product_name]++;
        }
      }, []).join('').toLowerCase();
      this.productsIndex = {};
      this.pushCurrentQueryString(productItemNames);
      // console.log('query string from a product: ', this.companiesQueryStrings[this.companiesQueryArrayIndex]);
    }
    if (d[0].keyword_name !== undefined) {
      const keywordItemNames = d.reduce((keywordNames, keyword) => {
        const { keyword_name } = keyword;
        if(this.keywordsIndex.keyword_name === undefined) {
          this.keywordsIndex[keyword_name] = 1;
          keywordNames.push(keyword_name);
          return keywordNames;
        } else {
          this.keywordIndex[product_name]++;
        } 
      }, []).join('').toLowerCase();
      this.keywordIndex = {};
      // console.log('keywordItemNames TOLOWERCASE(): ', keywordItemNames)
      this.pushCurrentQueryString(keywordItemNames);
      // console.log('query string from a keyword: ', this.companiesQueryStrings[this.companiesQueryArrayIndex]);
    }
    console.log('QUERYSTRINGS: ', this.companiesQueryStrings);
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
      console.log('HERE SEARCHTERM IS!!!: ', this.state.searchTerm);
      console.log(data)
    });
  }

  addCompanyArrayToQueryStrings(companyName) {
    if (this.firstCompanyPassedOver) {
      if (this.companiesQueryArrayIndex < this.state.data.length - 1) {
        console.log('INCREMENTED, BITCHES: ', this.companiesQueryArrayIndex);
        this.companiesQueryArrayIndex++;
      } else {
        this.companiesQueryArrayIndex = 0;
      }
      
    } else {
      this.firstCompanyPassedOver = true;
    }

    if (this.companiesQueryStrings.length < this.state.data.length) {
      this.companiesQueryStrings.push([companyName.toLowerCase()]);
    }
    console.log('companiesQueryStrings after pushing: ', this.companiesQueryStrings);
    console.log('THIS IS THE INDEXXXX: ', this.companyQueryArrayIndex);
  }

  pushCurrentQueryString(qstr) {
    const { companiesQueryArrayIndex } = this;
    console.log('companiesQueryArrayIndex from pushCurrent Func: ', companiesQueryArrayIndex);
    this.companiesQueryStrings[companiesQueryArrayIndex].push(qstr);
    
  }

  handleQueryData(d) {
    // cycle through all 20 arrays, join
    let joinedQueries = d.map(query => query.join('')); 
    console.log('JOINEDQUERIES: ', joinedQueries);
    // setState
    this.setState({ companiesQueryStrings: joinedQueries }, (data) => {
        console.log('companiesQueryStrings after setting state: ', this.state.companiesQueryStrings);
      }
    );
  }

  applySearchFilter(d) {
    let newQueryStrings = [];
    if (this.state.searchTerm !== '') {
      const newData = d.reduce((newDataArray, company, index) => {
        if (this.companiesQueryStrings[index].includes(this.state.searchTerm)) {
          newDataArray.push(company);
          newQueryStrings.push(this.companiesQueryStrings[index]);
        }
        return newDataArray;
      });
      console.log('filteredData: ', newData)
      this.setState({ data: newData })
    }
  }
    // take most parent data, filter companies according to stringQueryArray

  render() {
    return (
      <div className="container-fluid" id="appContainer" style={styles.container}>
        <div className="row">
          <Header />
        </div>
        <div className="row" id="appContainer">
          {this.state.buttonsLoading ?
          <div /> :
          <Sidebar 
            buttonData={this.state.buttons} 
            updateSearchTerm={this.updateSearchTerm} 
          />}
          {this.state.dataLoading ?
          <Loading /> :
          <ListContainer 
            data={this.state.data} 
            state={this.state} 
            updateButtonsData={this.updateButtonsData}
            addCompanyArrayToQueryStrings={this.addCompanyArrayToQueryStrings}
            pushCurrentQueryString={this.pushCurrentQueryString}
          />}
        </div>
      </div>
    )
  }
}

export default AppContainer;