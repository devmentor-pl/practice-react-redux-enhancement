import { combineReducers } from 'redux';
import githubReducer from '../modules/github/github.reducer';
import { stackoverflowReducer } from '../modules/stackoverflow';

const rootReducer = combineReducers({
    github: githubReducer,
    stackoverflow: stackoverflowReducer
});

export default rootReducer;