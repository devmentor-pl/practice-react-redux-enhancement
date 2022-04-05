import { combineReducers } from 'redux';

import reposReducer from './github.reductor';
import stackReducer from './stackoverflow.reducer';

const reducers = combineReducers({
  repos: reposReducer,
  stacks: stackReducer,
});

export default reducers;
