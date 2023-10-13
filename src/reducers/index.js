import { combineReducers } from "redux";

import { githubReducer } from "../modules/github";

const reducers = combineReducers({
  github: githubReducer,
});

export default reducers