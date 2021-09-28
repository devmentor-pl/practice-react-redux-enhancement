import { combineReducers } from 'redux';

import githubReducer from '../modules/github/github.reductor.js';
import stackoverflowReducer from '../modules/stackoverflow/stackoverflow.reductor';

const reducer = combineReducers({
	github: githubReducer,
	stackoverflow: stackoverflowReducer,
});

export default reducer;