import types from './github.types'

const add = test => ({type: types.ADD, payload: {test: test}})

export default {
    add,
}