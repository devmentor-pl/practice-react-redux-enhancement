import stackTypes from './stack.types';

const initState = {
	results: [],
	errors: [],
};

const stackReducer = (state = initState, action) => {
	switch (action.type) {
		case stackTypes.ADD_RESULTS_STATE:
			return { ...state, results: action.payload.results };
		case stackTypes.ADD_ERROR_API:
			return { ...state, errors: action.payload.errors };
		default:
			return state;
	}
};

export default stackReducer;
