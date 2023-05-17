import types from './github.types';

const initState = {
	repos: [],
	messages: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_REPOS:
			return {
				...state,
				repos: action.payload,
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
