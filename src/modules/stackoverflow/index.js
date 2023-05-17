import { createStore, applyMiddleware } from "redux";
import { stackoverflowReducer } from "./stackoverflow.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(stackoverflowReducer, composeWithDevTools(applyMiddleware(thunk)))

