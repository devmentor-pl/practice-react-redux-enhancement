import types from './stack.types';
import StackAPI from './stack.api';

const askAPI = new StackAPI();

export const setTopics = ({items}) => {
    return {
        type: types.SET_TOPICS,
        payload: {
            topics:items
        }
    }
}

export const loadTopics = (topicTitle) => (dispatch) => {
    askAPI.getTopics(topicTitle)
    .then(resp=> dispatch(setTopics(resp)))
}

export const sortDesc = () => {
    return {
        type: types.SORT_DESC,
    }
}

export const sortAsc = () => {
    return {
        type:types.SORT_ASC,
    }
}