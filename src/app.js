import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import AppContainer from './components/appContainer.js'

ReactDOM.render(
  <div>
   <AppContainer />
  </div>,
	document.getElementById('app')
);
