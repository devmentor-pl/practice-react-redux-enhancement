import { combineReducers } from "redux";

import githubReducer from '../modules/github/github.reductor';
import stackoverflowReducer from '../modules/stackoverflow/stackoverflow.reductor'

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer
})

export default reducers
