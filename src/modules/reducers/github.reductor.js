import types from '../github/github.types';

const initState ={
    repos:[],
    error:[]
}

const reposReducer = ((state=initState, action)=> {
    switch (action.type) {
        case types.LOAD_REPOS: 
            return {...state, repos: action.payload, error:[]};
        case types.SET_ERROR: 
            return {...state, repos:[], error: [action.payload]};
        default:
            return state;
    }
})

export default reposReducer;
