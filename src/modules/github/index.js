import githubReducer from './github.reductor';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore (
    githubReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;