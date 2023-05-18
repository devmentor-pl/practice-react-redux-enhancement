import { combineReducers } from 'redux';
import githubReducer from '../github/github.reducer';
import stackReducer from '../stackoverflow/stackoverflow.reducer';

const reducers = combineReducers({
	github: githubReducer,
	stack: stackReducer,
});

export default reducers;
