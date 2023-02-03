import { createStore, applyMiddleware } from "redux";
import { githubReducer } from "./github.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(githubReducer, composeWithDevTools(applyMiddleware(thunk)))

