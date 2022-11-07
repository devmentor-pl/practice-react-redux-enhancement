// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as ghReducer } from './modules/github';
import { reducer as soReducer } from './modules/stackoverflow';
import App from './components/App';

const store = createStore(
  combineReducers({
    github: ghReducer,
    stackoverflow: soReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
)


ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.querySelector('#root')
);