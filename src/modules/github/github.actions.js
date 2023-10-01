import { FILTER_DATA, UPLOAD_DATA } from "./github.types"

export const uploadDataAction = (resp) => {
  return {
    type: UPLOAD_DATA,
    payload: resp
  }
}

export const filterDataAction = (dataToFilter) => {
  return {
    type: FILTER_DATA,
    payload: dataToFilter
  }
}