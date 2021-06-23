const initialState = {
    userName: '',
    allRepos: [],
    filteredRepos: [],
    repoFilter: ''
}

const gitHubReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'getAllRepos': {
            const allRepos = action.payload
            state.allRepos = [...allRepos]
            return state
        }
        case 'updateUserName': {
            const userName = action.payload
            state.userName = userName
            return state
        }
        case 'updateReposFilter': {
            const repoFilter = action.payload
            state.repoFilter = repoFilter
            return state
        }
        default:
            return state
    }
}

export default gitHubReducer