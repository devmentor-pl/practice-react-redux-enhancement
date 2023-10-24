import { types } from "."

export const loadData = (arr) => {
    return {
        type: types.LOAD_DATA,
        payload: { arr: arr }
    }
}
