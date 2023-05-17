import types from './stackoverflow.types'
import StackOverflowAPI from './ stackoverflow.api'

const api = new StackOverflowAPI

export const setTitleAction = (title) => {
    return {
        type: types.SET_TITLE,
        payload: title
    }
}
export const setThreadsAction = (threads) => {
    return {
        type: types.SET_THREADS,
        payload: threads
    }
}

export const getThreadsAction = () => {
    return function thunk(dispatch, getState) {
        return api.getThreads(getState().stackoverflow.title)
        .then(resp => {
            console.log(resp)
            dispatch(setThreadsAction(resp.items))
        })
    }
}