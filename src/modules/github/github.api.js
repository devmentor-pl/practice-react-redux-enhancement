const url = 'https://api.github.com';

export const getRepos=(userName) => {
        // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
    return fetch(`${url}/users/${userName}/repos`)
        .then(resp => handleErrors(resp))
        .then(resp=> resp.json())
}

export const handleErrors = (resp) => {
    if(!resp.ok) {
        if (resp.status === 429) {
            return Promise.reject('LIMIT EXCEEDED');
            }
        return Promise.reject(resp.status);
    }   
    return resp;
}