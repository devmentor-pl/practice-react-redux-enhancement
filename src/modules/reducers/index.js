import { githubReducer } from "../github/github.reducer";
import { stackoverflowReducer } from "../stackoverflow/stackoverflow.reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    github: githubReducer,
    stackoverflow: stackoverflowReducer,
})

export default reducers;