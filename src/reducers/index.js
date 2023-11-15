import { combineReducers } from 'redux';

import { githubReducer } from '../modules/github';
import { stackReducer } from '../modules/stackoverflow';

const reducers = combineReducers({
	githubState: githubReducer,
	stackState: stackReducer,
});
export default reducers;
