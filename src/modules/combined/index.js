import React from 'react'
import { createStore, combineReducers } from 'redux'
import stackoverflowReducer from '../stackoverflow/stackoverflow.reductor'
import gitHubReducer from '../github/github.reductor'
import { Provider } from 'react-redux'
import StackoverflowComponent from '../stackoverflow/stackoverflow'
import GitHubComponent from '../github/github'

const allReducers = combineReducers({
    stackoverflow: stackoverflowReducer,
    gitHub: gitHubReducer
})

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  


const Combined = () => {

    return (
        <Provider store={ store } >
            <GitHubComponent/>
            <StackoverflowComponent/>
        </Provider>
    )
}

export default Combined