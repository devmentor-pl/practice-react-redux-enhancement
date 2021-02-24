import { SET_USERNAME, SET_QUERY } from './github.types';

const setUserName = (username) => {
    console.log('🚀 ~ setUserName ~ username', username);
    return {
        type: SET_USERNAME,
        payload: username,
    };
};
const setRepoQuery = (repositoryName) => {
    return {
        type: SET_QUERY,
        payload: repositoryName,
    };
};

export { setUserName, setRepoQuery };
