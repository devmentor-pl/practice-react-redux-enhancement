import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { githubReducer } from './github';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  githubReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
