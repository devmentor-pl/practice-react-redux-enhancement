import types from './github.types'

// ACTION CREATORS
const add = text => ({type: types.ADD, payload: {text: text}})
const addRepos = name => ({type: types.ADD_REPOS, payload: {repo: name}})
const addPhrase = phrase => ({type: types.ADD_PHRASE, payload: {phrase}})
const resetRepo = () => ({type: types.RESET_REPOS})

export default {
    add,
    addRepos,
    addPhrase,
    resetRepo
}