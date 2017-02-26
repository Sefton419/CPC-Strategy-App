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
      dataWithQueryStrings: null,
      dataLoading: true,
      dataUrl: DATAURL,
      buttons: {
        companies: [],
        products: [],
        keywords: []
      },
      buttonsLoading: true,
      searchTerm: '',
      companiesQueryStrings: null
    }

    this.firstCompanyPassedOver = false
    this.companiesQueryArrayIndex = 0;
    this.companiesQueryStrings = [];

    this.companiesIndex = {};
    this.productsIndex = {};
    this.keywordsIndex = {};  

    this.dataWithQueryStrings = null;

    this.updateButtonsData = this.updateButtonsData.bind(this);
    this.handleIndexData = this.handleIndexData.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.addCompanyArrayToQueryStrings = this.addCompanyArrayToQueryStrings.bind(this);
    this.pushCurrentQueryString = this.pushCurrentQueryString.bind(this);
    this.handleQueryData = this.handleQueryData.bind(this);
    this.updateSearchTermFromSearchBar = this.updateSearchTermFromSearchBar.bind(this);
    
  }

  componentDidMount() {
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
        this.setState({data: resp.data});
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
      .catch((error) => {
        console.log('ERROR in mapping data');
      });
    } 
  }

  componentWillUpdate() {
    // if (this.state.searchTerm !== null) {
    //   this.applySearchFilter(this.state.data)
    // }
    // console.log('COMPONENT UPDATED: ', this.state.data);




    // console.log('WE ARE IN ELSE LAND!!!');
    // // map queryData to data if it does not already exist on data 
    // console.log('??? ', this.state.dataLoading === false);
    // if (this.state.dataLoading === false) {
    //   console.log('??? ', this.state.data);
    //   if (this.state.data[0].queryString === undefined) {
    //     console.log('WE ARE MAPPING QUERYSTRINGS NOW!!!');
    //     this.state.data.forEach((company, index) => {
    //       company.queryString = this.companiesQueryStrings[index];
    //     });
    //   }
    //   // create this.filteredData if searchTerm is not empty
    //   if (this.state.searchTerm !== '') {
    //     console.log('WE ARE FILTERING VIA QUERYSTRINGS NOW!!!');
    //     this.filteredData = this.state.data.filter(company => {
    //       return company.queryString.includes(this.state.searchTerm);
    //     });
    //     this.setState({ filteredData: this.filteredData });

    //   }
    // }
  }

  updateButtonsData(d) {    
    // check to see whether dealing with companies, products, or keywords
    if (d[0].client_name !== undefined) {
      const companyNames = d.reduce((clientNames, company) => {
        const { client_name } = company;
        if(this.companiesIndex.client_name === undefined) {
          // side effect
          this.companiesIndex[client_name] = 1;
          clientNames.push(client_name);
          return clientNames;
        } else {
          // side effect
          this.companiesIndex[product_name]++;
        }
      }, []);
    }
    if (d[0].product_name !== undefined) {
      const productItemNames = d.reduce((productNames, product) => {
        const { product_name } = product;
        if(this.productsIndex.product_name === undefined) {
          // side effect
          this.productsIndex[product_name] = 1;
          productNames.push(product_name);
          return productNames;
        } else {
          // side effect
          this.productsIndex[product_name]++;
        }
      }, []).join(' ').toLowerCase();
      this.pushCurrentQueryString(`${productItemNames} `);
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
      }, []).join(' ').toLowerCase();
      // console.log('keywordItemNames TOLOWERCASE(): ', keywordItemNames)
      this.pushCurrentQueryString(`${keywordItemNames} `);
      // console.log('query string from a keyword: ', this.companiesQueryStrings[this.companiesQueryArrayIndex]);
    }
    // console.log('QUERYSTRINGS: ', this.companiesQueryStrings);
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
    // console.log(`${term} button worked!`);
    this.setState({searchTerm: term.toLowerCase()});
    
  }

  updateSearchTermFromSearchBar(event) {
    this.setState({searchTerm: event.target.value.toLowerCase()});
  }

  addCompanyArrayToQueryStrings(companyName) {
    if (this.firstCompanyPassedOver) {
      if (this.companiesQueryArrayIndex < this.state.data.length - 1) {
        // console.log('INCREMENTED: ', this.companiesQueryArrayIndex);
        this.companiesQueryArrayIndex++;
      } else {
        this.companiesQueryArrayIndex = 0;
      }
      
    } else {
      this.firstCompanyPassedOver = true;
    }

    if (this.companiesQueryStrings.length < this.state.data.length) {
      this.companiesQueryStrings.push([` ${companyName.toLowerCase()} `]);
    }
  }

  pushCurrentQueryString(qstr) {
    const { companiesQueryArrayIndex } = this;
    // console.log('companiesQueryArrayIndex from pushCurrent Func: ', companiesQueryArrayIndex);
    this.companiesQueryStrings[companiesQueryArrayIndex].push(qstr);
    
  }

  handleQueryData(d) {
    // cycle through all 20 arrays, join
    let joinedQueries = d.map(query => query.join('')); 
    console.log('JOINEDQUERIES: ', joinedQueries);
    // setState
    const dataWithQueryStrings = this.state.data.map((company, index) => {
      company.queryString = joinedQueries[index];
      return company;
    });
    this.setState({ 
      dataWithQueryStrings: dataWithQueryStrings,
      companiesQueryStrings: joinedQueries 
    });
  console.log('this.state.dataWithQueryStrings: ', this.state.dataWithQueryStrings);
  }

  render() {
    return (
      <div className="container-fluid" id="appContainer" style={styles.container}>
        <div className="row">
          <Header
            state={this.state}
            updateSearchTermFromSearchBar={this.updateSearchTermFromSearchBar}
          />
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
            data={this.state.dataWithQueryStrings || this.state.data} 
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