const initState = {
    repos: [],
};

const githubReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOAD_ALL_REPOS":
            return {
                repos: action.payload.repos,
            };
        case "SEARCH_REPOS":
            return {
                repos: action.payload.repos,
            };
        case "CLEAR":
            return {
                repos: [],
            };
        default:
            return state;
    }
};

export default githubReducer;
