import { DATA_FILTER, REPUTATION_FILTER, UPLOAD_DATA } from './stackoverflow.types'

export const uploadDataAction = (resp) => {
  return {
    type: UPLOAD_DATA,
    payload: resp
  }
}

export const filterByDateAction = () => {
  return {
    type: DATA_FILTER
  }
}

export const filterByReputationAction = () => {
  return {
    type: REPUTATION_FILTER
  }
}