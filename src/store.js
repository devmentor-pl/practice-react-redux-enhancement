import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reducer from "./modules/github/github.reductor";
import reducer from "./modules/stackoverflow/stackoverflow.reductor";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
