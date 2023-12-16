// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, combineReducers } from'redux';
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import { reducer as stackoverflowReducer} from './modules/stackoverflow';
import { reducer as githubReducer } from './modules/github';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';

const store = createStore(
  combineReducers({
    github: githubReducer,
    stackoverflow: stackoverflowReducer
  }),
   composeWithDevTools( applyMiddleware(thunk)))

const root = createRoot(document.querySelector('#root'));
root.render(<Provider store={store}><App /></Provider>);
