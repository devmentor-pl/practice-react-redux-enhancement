import { combineReducers } from 'redux'


import gitReducer from './github.reducer'
import stackReducer from './stackoverflow.reducer'

const rootReducer = combineReducers({
	git: gitReducer,
	stack: stackReducer,
})

export default rootReducer
