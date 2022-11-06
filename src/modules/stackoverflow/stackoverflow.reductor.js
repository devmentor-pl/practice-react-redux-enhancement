import types from './stackoverflow.types'

const initState = {
  stacks: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {    
    case types.RENDER_STACKS:
      return {
        ...state,
        stacks: action.payload
      }
    default:
      return state
  }
}

export default reducer
