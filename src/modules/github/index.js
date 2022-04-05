import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reposReducer from './github.reductor';

const store = createStore(reposReducer, applyMiddleware(thunk));
