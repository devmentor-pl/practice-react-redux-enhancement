import githubTypes from './github.types';
const initState = {
	repos: [],
	messages: [],
};

const githubReducer = (state = initState, action) => {
	switch (action.type) {
		case githubTypes.ADD_REPO_STATE:
			return { ...state, repos: action.payload.repos };
		case githubTypes.ADD_ERROR_API:
			return { ...state, messages: action.payload.message }; 
		default:
			return state;
	}
};

export default githubReducer;
