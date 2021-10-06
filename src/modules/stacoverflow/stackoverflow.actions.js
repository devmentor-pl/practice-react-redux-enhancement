import types from './stackoverflow.types';
import stackOverflowAPI from './stackoverflow.api';

const api = new stackOverflowAPI();

export const getNameField = (name, value) => {
	return {
		type: types.GET_NAME_FIELD,
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
    } = state.stackoverflow;
	api.getResponse(search, sortByDate).then((resp) => {
		dispatch(getAllRepos(resp.items));
	});
};