import types from './stackoverflow.types';
import stackOverflowAPI from './stackoverflow.api';

const API = new stackOverflowAPI();

export const setFieldValue = (name, value) => {
	return {
		type: types.SET_FIELD_VALUE,
		payload: { name, value },
	};
};
export const setResponse = (resp) => {
	return {
		type: types.SET_RESPONSE,
		payload: resp,
	};
};

export const getResponse = () => (dispatch, getState) => {
	const state = getState();
	const {
		values: { search, sortByDate },
	} = state;
	API.getResponse(search, sortByDate).then((resp) => {
		dispatch(setResponse(resp.items));
	});
};
