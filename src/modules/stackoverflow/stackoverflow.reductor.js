import types from './stackoverflow.types';

const initState = {
	values: {},
	response: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SET_FIELD_VALUE:
			return {
				...state,
				values: {
					...state.values,
					[action.payload.name]: action.payload.value,
				},
			};
		case types.SET_RESPONSE:
			return {
				...state,
				response: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
