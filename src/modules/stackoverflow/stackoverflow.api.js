import { uploadDataAction } from "./stackoverflow.actions"

const url = 'https://api.stackexchange.com/2.3/similar'

export const stackoverflowGetData = (title) => (dispatch, getState) => {
  return fetch(`${url}?order=desc&sort=activity&title=${title}&site=stackoverflow`)
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }

      throw new Error('Network error')
    })
    .then(resp => {
      dispatch(uploadDataAction(resp))
    })
}