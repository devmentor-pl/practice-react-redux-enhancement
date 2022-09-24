import types from './github.types'

const add = text => ({type: types.ADD, payload: {text: text}})

export default {
    add,
}