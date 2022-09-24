import types from './github.types'

// ACTION CREATORS
const add = text => ({type: types.ADD, payload: {text: text}})
const addRepos = name => ({type: types.ADD_REPOS, payload: {repo: name}})

export default {
    add,
    addRepos,
}