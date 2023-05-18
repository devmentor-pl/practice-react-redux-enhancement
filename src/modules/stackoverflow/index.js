import { legacy_createStore, applyMiddleware } from 'redux';
import reducer from './stackoverflow.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = legacy_createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);
