import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk'
import ghReducer from "./github.reducer";
import stackReducer from "../stackoverflow/stack.reducer";

const rootReducer = combineReducers({
  github: ghReducer,
  stackoverflow: stackReducer
})
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log(store.getState());
});
export default store;