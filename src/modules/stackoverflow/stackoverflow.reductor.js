import types from './stackoverflow.types'

const initState = {
  stacks: [],
  sort: ''
}

const reducer = (state = initState, action) => {
  switch(action.type) {    
    case types.RENDER_STACKS:
      return {
        ...state,
        stacks: action.payload
      }
    case types.SET_SORT:
      return {
        ...state,
        sort: action.payload.sort
      }
    default:
      return state
  }
}

export default reducer
