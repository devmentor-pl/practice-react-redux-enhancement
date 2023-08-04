import types from "./stackoverflow.types";
import StackOverFlowApi from "./stackoverflow.api";

const stackApi = new StackOverFlowApi();

export const setThreadsAction = threads => {
	return {
		type: types.SET_THREADS,
		payload: threads.items,
	};
};

export const setStackErrorAction = err => {
	return {
		type: types.SET_STACK_ERROR,
		payload: {
			message: err.message,
			type: "error",
		},
	};
};

export const getThreads = query => dispatch => {
	return stackApi
		.getItems(query)
		.then(resp => dispatch(setThreadsAction(resp)))
		.catch(err => dispatch(setStackErrorAction(err)));
};


