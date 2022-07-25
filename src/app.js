// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducer from './modules/github/github.reductor';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
        <App />
        </Provider>
    </React.StrictMode>,
   document.querySelector('#root')
);