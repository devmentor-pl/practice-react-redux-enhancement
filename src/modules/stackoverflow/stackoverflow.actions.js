import { StackoverflowAPI, types } from "."

export const getData = (title, sort) => (dispatch, getState) => {
    const api = new StackoverflowAPI()
    api.getData(title, sort)
        .then((data) => {
          console.log(data)
                dispatch(setData(data.items))
      
        })
        .catch(err => console.log(err))
}

export const setData = (arr) => {
    return {
        type: types.SET_DATA,
        payload: { arr }
    }
}

export const setSort = (sort) => {
    return {
        type: types.SET_SORT,
        payload: { sort }
    }
}