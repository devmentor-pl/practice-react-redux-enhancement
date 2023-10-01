// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from "redux";
import reducer from './modules/stackoverflow/stackoverflow.reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
