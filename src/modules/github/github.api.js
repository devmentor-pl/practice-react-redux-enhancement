// src/modules/github/github.api.js
export default class GitHubAPI {
  url = 'https://api.github.com';

  getRepos(userName) {
    // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-userz
    return fetch(`${this.url}/users/${userName}/repos`)
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  searchRepos(userName, repoName) {
    return fetch(
      `${this.url}/search/repositories?q=${repoName}+user:${userName}`
    )
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  }
}
