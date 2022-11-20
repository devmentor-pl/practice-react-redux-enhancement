import types from './stackoverflow.types'

export const renderStacksAction = (data) => {
  return {
    type: types.RENDER_STACKS,
    payload: data.items
  }
}

export const setSort = (sort) => {
  return {
    type: types.SET_SORT,
    payload: { sort }
  }
}
