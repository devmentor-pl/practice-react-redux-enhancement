import { combineReducers } from "redux";

import githubReducer from "../modules/github/github.reductor";
import stackReducer from '../modules/stackoverflow/stack.reductor';

const reducers = combineReducers({
    github: githubReducer,
    stack: stackReducer
});

export default reducers;