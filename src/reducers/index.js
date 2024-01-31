import { combineReducers } from 'redux';
import githubReducer from '../modules/github/github.reducer';

const rootReducer = combineReducers({
  github: githubReducer
});

export default rootReducer;