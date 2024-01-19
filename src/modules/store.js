import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { githubReducer } from './github';
import stackReducer from './stackoverflow/stack.reducer';

const rootReducer = combineReducers({
  github: githubReducer,
  stackoverflow: stackReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
