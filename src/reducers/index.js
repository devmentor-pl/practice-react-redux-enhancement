import { combineReducers } from "redux";

import { reducers as githubReducer } from '../modules/github'
import { reducers as stackoverflowReducer } from '../modules/stackoverflow'

const reducers = combineReducers({
    github: githubReducer,
    stackoverflow: stackoverflowReducer
})

export default reducers