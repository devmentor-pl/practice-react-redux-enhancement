import types from './github.types'

export const updateUserName = userName => {
    return {
        type: types.UPDATE_USER_NAME,
        payload: userName
    }
}

export const updateReposFilter = repoFilter => {
    return {
        type: types.UPDATE_REPOS_FILTER,
        payload: repoFilter
    }
}

export const getAllRepos = allRepos => {
    return {
        type: types.GET_ALL_REPOS,
        payload: allRepos
    }
}