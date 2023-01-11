import stackOverflowReducer from "../modules/stackoverflow/stackoverflow.reducer";
import githubReducer from "../modules/github/github/github.reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackOverflowReducer,
});

export default reducers;
