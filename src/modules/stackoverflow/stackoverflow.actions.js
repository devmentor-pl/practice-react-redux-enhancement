import types from './stackoverflow.types'

export const updateQuery = query => {
    return {
        type: types.UPDATE_QUERY,
        payload: query
    }
}

export const updateOrder = order => {
    return {
        type: types.UPDATE_ORDER,
        payload: order
    }
}

export const getQuestions = questions => {
    return {
        type: types.GET_QUESTIONS,
        payload: questions
    }
}