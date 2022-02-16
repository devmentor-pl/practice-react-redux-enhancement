// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reposReducer from './../src/modules/github/github.reductor';
import {composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reposReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>, document.querySelector('#root')
);