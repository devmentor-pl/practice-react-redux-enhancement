import { combineReducers } from "redux";

import { reducer as githubReducer } from "../modules/github";
import { reducer as stackoverflowReducer } from "../modules/stackoverflow";

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
});

export default reducers;
