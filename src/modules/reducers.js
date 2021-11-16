import { combineReducers } from "redux";

import githubReducer from "./github/github.reductor";
import stackReducer from "./stackoverflow/stack.reductor";

const reducers = combineReducers({
    github: githubReducer,
    stackoverflow: stackReducer,
});

export default reducers;
