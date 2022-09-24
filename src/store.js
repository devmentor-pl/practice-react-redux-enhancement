import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './modules/github/github.reductor'
import rootReducer from './reducers/rootRecuder';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    )

window.store = store
console.log( store.getState().reducer)

export default store





