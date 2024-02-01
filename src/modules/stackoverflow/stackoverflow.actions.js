import { FETCH_QUESTIONS_START, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE } from './stackoverflow.types';

export const fetchQuestionsStart = () => ({
    type: FETCH_QUESTIONS_START
});

export const fetchQuestionsSuccess = (questions) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions
});

export const fetchQuestionsFailure = (errorMessage) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload: errorMessage
});
