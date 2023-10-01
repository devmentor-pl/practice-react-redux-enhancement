import { FILTER_DATA, UPLOAD_DATA } from "./github.types"

const initState = {
  repos: [],
  filteredRepos: [],
  isFiltered: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPLOAD_DATA:
      return {
        ...state,
        isFiltered: false,
        repos: [...action.payload]
      }
    case FILTER_DATA:
      const filteredReposArr = state.repos.filter(repo => repo.name.includes(action.payload))

      return {
        ...state,
        isFiltered: true,
        filteredRepos: [...filteredReposArr]
      }
    default:
      return state
  }
}

export default reducer
