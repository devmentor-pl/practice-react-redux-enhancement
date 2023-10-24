class GitHubAPI {
    url = 'https://api.github.com';

    getRepos(userName) {
        // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
        return fetch(`${this.url}/users/${userName}/repos`)
            .then(this.handleErrors)
            .then(resp => resp.json())
        // .then(this.handleErrors)
        // .catch(err => console.log(err))          
    }

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
        // if(!resp.ok) {
        //     throw Error(resp.statusText);
        // } else {
        //     return resp.json()
        // }
    }
}

export default GitHubAPI