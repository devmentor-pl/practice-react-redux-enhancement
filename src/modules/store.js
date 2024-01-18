//src/modules/store.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { githubReducer } from './github';
import stackReducer from './stackoverflow/stack.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  stackReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
