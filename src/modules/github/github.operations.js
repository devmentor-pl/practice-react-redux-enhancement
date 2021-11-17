import { loadAllReposAction, searchReposAction } from "./github.actions";
import { loadRepos, searchRepos } from "./github.api";

export const load = (userName) => {
    return function thunk(dispatch, getState) {
        const resp = await loadRepos(userName);
        dispatch(loadAllReposAction(resp));
    };
};

export const search = (userName, keyWord) => {
    return function thunk(dispatch, getState) {
        const resp = await searchRepos(userName, keyWord);
        dispatch(searchReposAction(resp));
    };
};
