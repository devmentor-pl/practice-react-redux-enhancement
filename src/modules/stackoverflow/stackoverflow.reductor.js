const initialState = {
    query: '',
    questions: [],
    order: 'date'
}

const stackoverflowReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'getQuestions': {
            const questions = action.payload.items
            state.questions = [...questions]
            return state
        }
        case 'updateQuery': {
            const query = action.payload
            state.query = query
            return state
        }
        case 'updateOrder': {
            const order = action.payload
            state.order = order
            return state
        }
        default:
            return state
    }
}

export default stackoverflowReducer