// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import github from './modules/github/github.reducer'
import stackoverflow from './modules/stackoverflow/stackoverflow.reducer'


import { combineReducers } from 'redux';
const reducers = combineReducers({
  github,
  stackoverflow
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)


const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
