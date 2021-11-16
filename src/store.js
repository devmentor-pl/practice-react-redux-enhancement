import { createStore, applyMiddleware } from "redux";
import githubReducer from "./modules/github/github.reductor";
import stackReducer from "./modules/stackoverflow/stack.reductor";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    /*githubReducer*/ stackReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
