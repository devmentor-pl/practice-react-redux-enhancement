
// STATE
const initState = {
    test: ['Ala ma kota'],
    repos: []
}

// REDUCER
const reducer = (state = initState, action) => {
    console.log(action)
    return state 
}

export default reducer
