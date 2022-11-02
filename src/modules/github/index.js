import React from 'react';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reposReducer from './github.reductor';
import {composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reposReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;