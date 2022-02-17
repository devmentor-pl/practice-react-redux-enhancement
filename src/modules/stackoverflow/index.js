import { createStore, applyMiddleware } from "redux";
import stackReducer from "./stack.reducer";
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(stackReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;