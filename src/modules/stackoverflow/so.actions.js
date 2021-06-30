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

const toggle = ({ name }) => {
    return {
        type: types.TOGGLE,
        payload: name,
    };
};

const getResponse = () => (dispatch, getState) => {
    const state = getState();
    api.getResponse(state.stackoverflow.request).then((resp) =>
        dispatch(setResponse(resp.items))
    );
};

export { setFieldValue, getResponse, toggle };
