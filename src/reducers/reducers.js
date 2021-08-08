import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import stackoverflowReducer from './../modules/stackoverflow/stackoverflow.reductor';
import gitHubReducer from './../modules/github/github.reductor';
import StackoverflowComponent from './../modules/stackoverflow/stackoverflow'
import GitHubComponent from './../modules/github/github'

const allReducers = combineReducers({
    stackoverflow: stackoverflowReducer,
    gitHub: gitHubReducer
})

const store = createStore(allReducers, composeWithDevTools( applyMiddleware(thunk) ) )  


const Combined = () => {

    return (
        <Provider store={ store } >
            <GitHubComponent/>
            <StackoverflowComponent/>
        </Provider>
    )
}

export default Combined;