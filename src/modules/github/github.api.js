import { token } from "../../token";

class GitHubAPI { 
    url = 'https://api.github.com';
    userToken = token;
    getRepos(userName) {
        const headers = {
            'Authorization': `token ${this.userToken}`
        }
        return fetch(`${this.url}/users/${userName}/repos`, {headers})
            .then(this.handleErrors)
            .then(resp => resp.json())
    }
    getReposWithSign(userName, sign) {
        return this.getRepos(userName)
            .then(repos => {
                const filteredRepos = repos.filter(repo => repo.name.includes(sign));
                console.log(filteredRepos);
                return filteredRepos;
            })
            .catch(error => {
                console.error('Błąd podczas pobierania repozytoriów:', error);
                throw error;
            });
    }
    
    handleErrors(resp) {
        if(!resp.ok) {
            throw Error(resp.statusText);
        }

        return resp;
    }
}

export default GitHubAPI;