const initState = {
    posts: [],
};

const stackReducer = (state = initState, action) => {
    switch (action.type) {
        case "SEARCH_POSTS":
            return {
                posts: action.payload.posts,
            };
        case "CLEAR":
            return {
                posts: [],
            };
        default:
            return state;
    }
};

export default stackReducer;
