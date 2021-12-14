
const INITIAL_STATE = {
    items: [],
    errors: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'getData':
            console.log(state);
            return { ...state, items: action.payload.value, errors: [] };
        case 'handleErrors':
            const { value, type } = action.payload;
            return { ...state, errors: [ ...state.errors, { value: value, message: type }]}
        default: return state;
    }
};

export default reducer;