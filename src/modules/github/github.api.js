import {actions} from './index'

class GitHubAPI {
    url = 'https://api.github.com';

    getRepos(userName) {
        // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
        // return fetch(`${this.url}/users/${userName}/repos`)
        // more repos then 30
        return fetch(`${this.url}/users/${userName}/repos?q=stress+test+label:bug+language:python+state:closed&per_page=1000`)
            .then(this.handleErrors)
            .then(resp => resp.json())
    }

    handleErrors(resp) {
        if(!resp.ok) {
            throw Error(resp.statusText);
        }
        return resp;
    }

    // getAllRepos() {
    //     const repos = this.getRepos('andrzej-stasinski')
    //     repos
    //     .then(repos => {
    //         console.log(repos)
    //         return repos
    //     })
    //     .catch(err => console.log(err))
    // }

    getAllRepos = (user) => dispatch => {
        const repos = this.getRepos(user)
        repos
            .then(repos => {
                console.log(repos)
                repos.map(({name}) => dispatch(actions.addRepos(name)))
            })
            .catch(err => console.log(err))
    }
    
}
export default GitHubAPI