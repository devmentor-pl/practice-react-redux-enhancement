import { LOAD_ALL_REPOS, SEARCH_REPOS, CLEAR } from "./github.types";

export const loadAllReposAction = (repos) => {
    return {
        type: LOAD_ALL_REPOS,
        payload: { repos },
    };
};

export const searchReposAction = (repos) => {
    return {
        type: SEARCH_REPOS,
        payload: { repos },
    };
};

export const clearReposAction = () => {
    return {
        type: CLEAR,
    };
};
