import types from './so.types';

const setSearchQuery = (searchQuery) => {
    return {
        type: types.SET_SEARCH_QUERY,
        payload: searchQuery,
    };
};
const setFilterQuery = (filterQuery) => {
    return {
        type: types.SET_FILTER_QUERY,
        payload: filterQuery,
    };
};

export { setSearchQuery, setFilterQuery };
