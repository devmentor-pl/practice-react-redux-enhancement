import {combineReducers} from 'redux';

import gitReducer from './../modules/github/github.reductor';
import stackReducer from './../modules/stackoverflow/stackoverflow.reductor';

const reducers = combineReducers({
    git: gitReducer,
    stack: stackReducer,
});

export default reducers;
