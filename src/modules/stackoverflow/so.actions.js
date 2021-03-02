import types from './so.types';

const setSearchQuery = (query) => {
    return {
        type: types.SET_SEARCH_QUERY,
        payload: query,
    };
};

export default { setSearchQuery };
