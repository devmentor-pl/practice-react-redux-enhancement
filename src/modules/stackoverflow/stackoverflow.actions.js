import types from './stackoverflow.types';
import StackOverFlowAPI from './stackoverflow.api';

const api = new StackOverFlowAPI();

export const setThreadsAction = (threads) => {
	return {
		type: types.SET_THREADS,
		payload: threads.items,
	};
};

export const setErrorAction = (err) => {
	return {
		type: types.SET_ERROR,
		payload: { message: err.toString(), type: 'error' },
	};
};

export const getThreads = (query) => (dispatch) => {
	return api
		.getThreads(query)
		.then((resp) => dispatch(setThreadsAction(resp)))
		.catch((err) => dispatch(setErrorAction(err)));
};
