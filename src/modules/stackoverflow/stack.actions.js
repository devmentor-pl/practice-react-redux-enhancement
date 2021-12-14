import StackApi from './stack.api';

const api = new StackApi();

export const getData = data => {
    return {
        type: 'getData',
        payload: {
            value: data
        }
    };
};

export const handleErrors = err => {
    return {
        type: 'handleErrors',
        payload: {
            value: err,
            type: 'error'
        }
    };
};

export const loadData = data => (dispatch, getState) => {
    api.getData(data)
        .then(({ items }) => dispatch(getData(items)))
        .catch(err => dispatch(handleErrors(err)));
};