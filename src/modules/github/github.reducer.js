import types from './github.types';

const initState = {
	repositories: [],
	messages: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_REPOS:
			const { repos } = action.payload;
			return {
				...state,
				repositories: repos,
			};

		case types.SET_ERROR:
			const { message, type } = action.payload;
			return {
				...state,
				messages: [...state.messages, { message: message, type: type }],
			};

		default:
			return state;
	}
};

export default reducer;
