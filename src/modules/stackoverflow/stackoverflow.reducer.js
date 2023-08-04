import types from "./stackoverflow.types";

const initialState = {
	threads: [],
	messages: [],
};

const reducerStack = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_THREADS:
			return {
				...state,
				threads: action.payload,
			};

		case types.SET_STACK_ERROR:
			return {
				...state,
				messages: [...state.messages, action.payload],
			};
		default:
			return state;
	}
};

export default reducerStack;
