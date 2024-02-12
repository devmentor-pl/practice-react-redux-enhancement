import StackOverflowAPI from "./stack.api";
import types from "../stackoverflow/stack.types";


const api = new StackOverflowAPI();
export const loadPostsAction = () => {
    return (dispatch) => {
        dispatch({ type: types.LOAD_POSTS});
        return api.getPosts().then((posts) => {
            dispatch({
                type: types.LOAD_POSTS_SUCCES,
                payload: posts
            })
            return posts
        })
        .catch((error) => {
            dispatch({ type: types.LOAD_POSTS_FAIL})
            return api.handleErrors(error)
        })
    }
}