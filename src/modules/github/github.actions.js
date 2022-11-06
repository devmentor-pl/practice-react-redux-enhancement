import types from './github.types'

export const renderReposAction = (data) => {
  return {
    type: types.RENDER_REPOS,
    payload: { repos: data }
  }
}
