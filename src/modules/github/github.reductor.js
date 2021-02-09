import types from './github.types';

const initState = {
	values: {},
	repos: [],
	filteredRepos: [],
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
		case types.SET_ALL_REPOS:
			return {
				...state,
				repos: action.payload,
			};
		case types.SET_FILTERED_REPOS:
			return {
				...state,
				filteredRepos: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
