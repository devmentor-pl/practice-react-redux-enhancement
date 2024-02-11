import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk'
import ghReducer from "./github.reducer";

const store = createStore(
  ghReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState())
export default store;