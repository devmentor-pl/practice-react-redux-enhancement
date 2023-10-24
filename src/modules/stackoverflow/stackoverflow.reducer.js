import { types } from "."

const initState = {
    dataArr: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_DATA:
            return {
                ...state,
                dataArr: action.payload.arr
            }
    }
    return state
}

export default reducer