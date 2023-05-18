import { combineReducers } from "redux";

import githubReducer from "../modules/github/reducers/github.reducer";
import stackoverflowReducer from "../modules/stackoverflow/reducers/stackoverflow.reducer";
import messagesReducer from "../modules/messages/reducers/messages.reducer";

const reducers = combineReducers({
  github: githubReducer,
  stackoverflow: stackoverflowReducer,
  messages: messagesReducer,
});

export default reducers;
