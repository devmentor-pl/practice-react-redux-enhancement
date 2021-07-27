import stackoverflowAPI from './stackoverflow.api';
import types from './stackoverflow.types';

const stackAPI = new stackoverflowAPI;

export const getQuery = (searchQuery) => {
    return{
        type: types.GETQUERY,
        payload: searchQuery
    }
}

export const fetchingData = () => {
    return {
        type: types.FETCHING_DATA,
    }
}

export const setQuerysData = (data) => {
    return{
        type: types.SETQUERYSDATA,
        payload: data
    }
}

export const updateOrder = (order) => {
    return{
        type: types.UPDATEORDER,
        payload: order
    }
}

export const updateSort = (sort) => {
    return{
        type: types.UPDATESORT,
        payload: sort
    }
}

export const getSearchedResults = () => (dispatch, getState) => {
    const state = getState();
    dispatch(fetchingData());
    stackAPI.getQueryQuestion(state.searchQuery, state.order, state.sort)
        .then((res) => dispatch(setQuerysData(res)))
}