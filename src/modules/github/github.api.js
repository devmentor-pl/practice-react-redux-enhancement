export default class GitHubAPI {
  url = 'https://api.github.com';

  getRepos(userName) {
    return fetch(`${this.url}/users/${userName}/repos`, {})
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      if (resp.status === 404) {
        throw Error('User not found');
      }
      if (resp.status === 403) {
        throw Error(
          'Access forbidden: You may have hit the rate limit or need authorization'
        );
      }
      throw Error(resp.statusText);
    }
    return resp;
  }
}
