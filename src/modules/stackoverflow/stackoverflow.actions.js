import types from './stackoverflow.types';
import StackOverflowAPI from './stackoverflow.api';

const api = new StackOverflowAPI();

export const setCommentQuery = query => {
    return {
        type: types.SET_COMMENT_QUERY,
        payload: { query },
    };
};

export const setCommentError = error => {
    return { type: types.SET_COMMENT_ERROR, payload: { error } };
};

export const removeCommentInputError = key => {
    return { type: types.REMOVE_COMMENT_ERROR, payload: { key } };
};

export const setFetchFailure = error => {
    return { type: types.FETCH_COMMENTS_FAILURE, payload: { error } };
};

export const setFetchSuccess = comments => {
    return { type: types.FETCH_COMMENTS_SUCCESS, payload: { comments } };
};

export const setFetchCommentsBegin = () => {
    return { type: types.FETCH_COMMENTS_BEGIN };
};

export const getCommentsAction = (query, order, sortOption) => (dispatch, getState) => {
    dispatch(setFetchCommentsBegin());
    return api
        .getComments(query, order, sortOption)
        .then(data => {
            console.log(data);
            dispatch(setFetchSuccess(data.items));
        })
        .catch(err => {
            dispatch(setFetchFailure(err.message));
        });
};
