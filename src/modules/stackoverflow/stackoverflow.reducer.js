import { types } from "."

const initState = {
    dataArr: [],
    sort: 'votes'
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_DATA:
            return {
                ...state,
                dataArr: action.payload.arr
            }
        case types.SET_SORT:
            return {
                ...state, sort: action.payload.sort
            }
    }
    return state
}

export default reducer