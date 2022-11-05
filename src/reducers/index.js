import { combineReducers } from "redux";

import githubReducer from '../modules/github/github.reductor';

const reducers = combineReducers({
  github: githubReducer,
})

export default reducers
