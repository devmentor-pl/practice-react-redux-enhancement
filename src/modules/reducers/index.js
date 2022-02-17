import { combineReducers } from "redux";

import reposReducer from "./github.reductor";
import stackReducer from "./stack.reducer";

const reducers = combineReducers({
    repos: reposReducer,
    stacks: stackReducer
})

export default reducers;