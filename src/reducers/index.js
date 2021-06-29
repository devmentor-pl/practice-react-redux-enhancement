
import { combineReducers } from "redux";
import  {reducerGithub}  from "../modules/github";
import  {reducerStackOverFlow}  from "../modules/stackOverflow";

const reducers = combineReducers({
    github: reducerGithub,
    stackoverflow: reducerStackOverFlow,
});

export default reducers;