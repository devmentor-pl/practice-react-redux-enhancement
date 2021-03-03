import types from './so.types';
import StackoverflowAPI from './so.api';

const api = new StackoverflowAPI();

const setFieldValue = (name, value) => {
    return {
        type: types.SET_FIELD_VALUE,
        payload: { name, value },
    };
};

const setResponse = (response) => {
    return {
        type: types.SET_RESPONSE,
        payload: response,
    };
};

const getResponse = () => (dispatch, getState) => {
    const state = getState();
    const { userQuery } = state.request;

    api.getResponse(userQuery).then((resp) =>
        dispatch(setResponse(resp.items))
    );
};

export { setFieldValue, getResponse };
