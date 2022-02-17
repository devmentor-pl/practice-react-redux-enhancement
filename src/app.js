// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
// import store from './modules/github/index'
import store from './modules/stackoverflow/index'

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>
  , document.querySelector('#root'));