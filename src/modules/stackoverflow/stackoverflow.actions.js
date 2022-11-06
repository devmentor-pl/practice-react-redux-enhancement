import types from './stackoverflow.types'

export const renderStacksAction = (data) => {
  return {
    type: types.RENDER_STACKS,
    payload: data.items
  }
}
