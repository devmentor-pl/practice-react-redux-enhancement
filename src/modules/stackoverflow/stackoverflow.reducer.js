import { DATA_FILTER, REPUTATION_FILTER, UPLOAD_DATA } from './stackoverflow.types'

const initState = {
  resp: [],
  filterByDate: true,
  filterByUserReputation: false
}

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case UPLOAD_DATA:
      return {
        ...state,
        resp: [...actions.payload.items]
      }
    case DATA_FILTER:
      return {
        ...state,
        filterByDate: true,
        filterByUserReputation: false
      }
    case REPUTATION_FILTER:
      return {
        ...state,
        filterByDate: false,
        filterByUserReputation: true
      }
    default:
      return state
  }
}

export default reducer