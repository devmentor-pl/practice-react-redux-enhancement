import { SEARCH_POSTS, CLEAR } from "./stack.types";

export const searchPostsAction = (posts) => {
    return {
        type: SEARCH_POSTS,
        payload: { posts },
    };
};

export const clearPostsAction = () => {
    return {
        type: CLEAR,
    };
};
