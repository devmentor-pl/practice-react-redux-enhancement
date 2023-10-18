import { combineReducers } from 'redux';

import { githubReducer } from '../modules/github';
import { stackOverflowReducer } from '../modules/stackoverflow';

const reducers = combineReducers({
    github: githubReducer,
    stackOverFlow: stackOverflowReducer,
});

export default reducers;
