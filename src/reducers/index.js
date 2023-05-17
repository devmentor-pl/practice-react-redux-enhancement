import { combineReducers } from "redux";

import githubReducer from "../modules/github/reducers/github.reducer";
import stackoverflowReducer from "../modules/stackoverflow/reducers/stackoverflow.reducer";

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
});

export default reducers;
