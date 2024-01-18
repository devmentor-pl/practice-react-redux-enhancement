import stackTypes from './stack.types';

export const insertResultsAction = results => {
	return {
		type: stackTypes.ADD_RESULTS_STATE,
		payload: {
			results: results,
		},
	};
};
export const insertErrorAction = err => {
	return {
		type: stackTypes.ADD_ERROR_API,
		payload: {
			errors: err,
		},
	};
};
