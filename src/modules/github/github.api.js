class GitHubAPI {
    url = 'https://api.github.com/';

    getRepos(username) {
        return fetch(`${this.url}users/${username}/repos`)
            .then(this.handleErrors)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => data);
    }

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
    }
}
export default GitHubAPI;
