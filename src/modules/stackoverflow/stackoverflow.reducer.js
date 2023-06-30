import types from './stackoverflow.types';

const initState = {
	items: [],
	messages: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_ITEMS:
			const { items } = action.payload.items;
			return {
				...state,
				items: items,
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
