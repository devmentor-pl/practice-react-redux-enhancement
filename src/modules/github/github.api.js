import { loadAllReposAction, searchReposAction } from "./github.actions";

export const loadRepos = (userName) => {
    const url = "https://api.github.com/users/";
    /*return function thunk(dispatch, getState) {*/
    return fetch(`${url}${userName}/repos?per_page=100`, {
        method: "GET",
        headers: {
            Accept: "application/vnd.github.mercy-preview+json",
        },
    })
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }

            throw Error(resp.statusText);
        })
        .then((resp) => {
            /*dispatch(loadAllReposAction(resp));*/
            return resp;
        })
        .catch((err) => {
            console.error(err);
        });
    /*};*/
};

export const searchRepos = (userName, keyWord) => {
    const url = "https://api.github.com";
    /*return function thunk(dispatch, getState) {*/
    return fetch(
        `${url}/search/repositories?q=${keyWord} in:name,description+org:${userName}&per_page=100`,
        {
            method: "GET",
            headers: {
                Accept: "application/vnd.github.mercy-preview+json",
            },
        }
    )
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }

            throw Error(resp.statusText);
        })
        .then((resp) => {
            const arr = resp.items;
            /*dispatch(searchReposAction(arr));*/
            return arr;
        })
        .catch((err) => {
            console.error(err);
        });
    /* };*/
};
