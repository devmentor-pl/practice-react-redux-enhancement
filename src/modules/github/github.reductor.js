import types from './github.types';

const initState = {
    repos: [],
}

const reducer = (state=initState,action) => {
    switch(action.type){
        case types.SET_REPOS:
            return {
                ...state,
                repos:action.payload.data
            }
        case types.FILTER_REPOS:
            const filteredReposList = state.repos.filter(repo => repo.name.toLowerCase().includes(action.payload.text)).map(filteredRepo => filteredRepo);
            return {
                ...state,
                repos:filteredReposList
            }
        default:
            return state;
    }
}

export default reducer;