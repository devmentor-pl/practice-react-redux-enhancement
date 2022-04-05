// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reposReducer from './../src/modules/github/github.reductor';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import store from './modules/stackoverflow/index';

// const store = createStore(
//   reposReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

import store from './modules/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
