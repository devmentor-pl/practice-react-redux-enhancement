import stackReducer from './stack.reductor';
import thunk from 'redux-thunk';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore (
    stackReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;