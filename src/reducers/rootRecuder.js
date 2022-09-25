import { combineReducers } from "redux";
import reducer from "../modules/github/github.reductor";
import stackReducer from '../modules/stackoverflow/stackoverflow.reductor'

const rootReducer = combineReducers({
    reducer,
    stackReducer,
})
export default rootReducer