import types from './stackoverflow.types';
import StackoverflowApi from './stackoverflow.api';
const api = new StackoverflowApi();

export const setItemsAction = (items) => {
	return {
		type: types.SET_ITEMS,
		payload: {
			items: items,
		},
	};
};

export const setErrorAction = (error) => {
	return {
		type: types.SET_ERROR,
		payload: {
			message: error,
			type: 'error',
		},
	};
};

export const getItemsAction = (title) => (dispatch) => {
	return api
		.getItems(title)
		.then((resp) => dispatch(setItemsAction(resp)))
		.catch((err) => dispatch(setErrorAction(err.toString())));
};
