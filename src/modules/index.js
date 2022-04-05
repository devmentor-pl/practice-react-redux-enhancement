import { createStore, applyMiddleware } from 'redux';
// import stackReducer from './stackoverflow/stackoverflow.reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
