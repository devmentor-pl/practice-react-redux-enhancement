import { combineReducers } from "redux";

import reposReducer from "./github/github.reductor";
import stackReducer from "./stackoverflow/stackoverflow.reductor";

const reducers = combineReducers({
  repos: reposReducer,
  stacks: stackReducer,
});

export default reducers;
