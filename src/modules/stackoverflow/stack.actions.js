import types from './stack.types';
import StackAPI from './stack.api';

const askAPI = new StackAPI();

export const setTopics = topics => {
    return {
        type: types.SET_TOPICS,
        payload: {
            topics:topics
        }
    }
}

export const loadTopics = (topicTitle) => (dispatch) => {
    askAPI.getTopics(topicTitle)
    .then(resp=> dispatch(setTopics(resp)))
}