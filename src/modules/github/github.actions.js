import types from './github.types'

const setUserAction = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  }
}

const setRepositoryPhraseAction = (repositoryPhrase) => {
  return {
    type: types.SET_REPOSITORY_PHRASE,
    payload: repositoryPhrase,
  }
}

const setRepositoriesAction = (repositories) => {
  return {
    type: types.SET_REPOSITORIES,
    payload: repositories.map((repository) => repository.name),
  }
}

const setErrorAction = (error) => {
  return {
    type: types.SET_ERROR,
    payload: error,
  }
}

export { setUserAction,setRepositoryPhraseAction,setRepositoriesAction,setErrorAction }
