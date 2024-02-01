import { FETCH_QUESTIONS_START, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE } from './stackoverflow.types';

const initialState = {
    questions: [],
    isFetching: false,
    errorMessage: ''
};

const stackoverflowReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_START:
        return { ...state, isFetching: true };
        case FETCH_QUESTIONS_SUCCESS:
        return { ...state, isFetching: false, questions: action.payload };
        case FETCH_QUESTIONS_FAILURE:
        return { ...state, isFetching: false, errorMessage: action.payload };
        default:
        return state;
    }
};

export default stackoverflowReducer;