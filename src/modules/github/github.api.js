class GitHubAPI {
    url = 'https://api.github.com/';

    getRepos(username) {
        console.log(
            'getting Repos, request here: ',
            `${this.url}users/${username}/repos`
        );
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
