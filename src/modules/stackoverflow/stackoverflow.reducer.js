import types from "./stackoverflow.types";

const initialState = {
	threads: [],
	messages: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_THREADS:
			const { threads } = action.payload;
			return {
				...state,
				threads: threads,
			};

		case types.SET_STACK_ERROR:
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
