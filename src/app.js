// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './modules/stackoverflow';
import App from './components/App';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)


ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.querySelector('#root')
);