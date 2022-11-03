import { setRepositoriesAction, setErrorAction } from './github.actions'

class GitHubAPI {
  url = 'https://api.github.com'

  getRepos = (userName) => (dispatch, getState) => {
    return fetch(`${this.url}/users/${userName}/repos`)
      .then(this.handleErrors)
      .then((resp) => resp.json())
      .then((resp) => dispatch(setRepositoriesAction(resp)))
      .catch((err) => dispatch(setErrorAction(err.message)))
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw new Error('Error occurred!')
    }

    return resp
  }
}

export default GitHubAPI
