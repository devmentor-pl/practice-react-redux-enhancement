import types from './stackoverflow.types';

import * as db from '../../db';

const initialState = {
    query: '',
    formError: '',
    fetchError: null,
    // comments: db.comments,
    comments: [],
    fetchLoading: false,
    initalFetchDone: false,
};

const stackOverflowReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COMMENT_QUERY:
            return {
                ...state,
                query: action.payload.query,
                formError: '',
            };
        case types.SET_COMMENT_ERROR:
            return {
                ...state,
                formError: action.payload.error,
            };

        case types.REMOVE_COMMENT_ERROR:
            return {
                ...state,
                formError: '',
            };
        case types.FETCH_COMMENTS_BEGIN:
            return {
                ...state,
                fetchLoading: true,
                fetchError: null,
            };
        case types.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                fetchLoading: false,
                comments: action.payload.comments,
                initalFetchDone: true,
                query: '',
            };
        case types.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                fetchLoading: false,
                fetchError: action.payload.error,
                comments: [],
            };
        default:
            return state;
    }
};

export default stackOverflowReducer;
