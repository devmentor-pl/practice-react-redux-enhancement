import reducerStack from "../stackoverflow/stackoverflow.reducer";
import reducerGitHub from "../github/github.reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
	github: reducerGitHub,
	stack: reducerStack,
});

export default reducers;
