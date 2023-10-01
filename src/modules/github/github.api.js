import { uploadDataAction } from "./github.actions";
const url = 'https://api.github.com';

// class GitHubAPI {

//     getRepos(userName) {
//         // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
//         return fetch(`${this.url}/users/${userName}/repos`)
//             .then(this.handleErrors)
//             .then(resp => resp.json())
//     }

//     handleErrors(resp) {
//         if (!resp.ok) {
//             throw Error(resp.statusText);
//         }

//         return resp;
//     }
// }

export const getAllRepos = (userName) => (dispatch, getState) => {
    return fetch(`${url}/users/${userName}/repos`)
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }

            throw new Error('Network Error!')
        })
        .then(resp => {
            dispatch(uploadDataAction(resp))
        })
}