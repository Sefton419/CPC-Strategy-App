import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import AppContainer from './components/appContainer.js'

ReactDOM.render(
  <div>
  <h1>this is app</h1>
   <AppContainer />
  </div>,
	document.getElementById('app')
);
