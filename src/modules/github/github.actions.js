import types from './github.types'

const setUserAction = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  }
}

const setReposPhraseAction = (repositoryPhrase) => {
  return {
    type: types.SET_REPOS_PHRASE,
    payload: repositoryPhrase,
  }
}

const getReposPhraseAction = (repositories) => {
  return {
    type: types.SET_REPOS,
    payload: repositories.map((repository) => repository.name),
  }
}


export { setUserAction,setReposPhraseAction,getReposPhraseAction }