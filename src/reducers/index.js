import { combineReducers } from "redux";
import githubReducer from "../modules/github/github.reducer";
import stackoverflowReducer from "../modules/stackoverflow/stack.reducer";

const reducers = combineReducers({
  github: githubReducer,
  stack: stackoverflowReducer,
});
export default reducers;
