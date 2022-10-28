import { combineReducers } from "redux";

import reducerGit from "../modules/github/github.reductor";
import reducerStack from "../modules/stackoverflow/stackoverflow.reductor";

const reducers = combineReducers({
  github: reducerGit,
  stackoverflow: reducerStack,
});

export default reducers;
