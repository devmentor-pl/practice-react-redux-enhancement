import types from "./github.types";

const initialState = {
	repos: [],
	messages: [],
};

const reducerGitHub = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_REPOS:
			const { repos } = action.payload;
			return {
				...state,
				repos: repos,
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

export default reducerGitHub;
