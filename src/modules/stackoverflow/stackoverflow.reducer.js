import types from './stackoverflow.types';

const initState = {
	threads: [],
	messages: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_THREADS:
			return {
				...state,
				threads: action.payload,
			};
		case types.SET_ERROR:
			return {
				...state,
				messages: [...state.messages, action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
