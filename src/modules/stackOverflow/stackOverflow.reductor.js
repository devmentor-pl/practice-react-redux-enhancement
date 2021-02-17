import types from '../stackOverflow/stackOverflow.types';

const initState = {
        value: [],
        response: [],
}

const reducer = (state = initState, action) => {
    switch(action.type) {

        case types.GET_USER:
        const {value} = action.payload;
        return {
           ...state,
           value,
        
        }

        case types.GET_RESPONSE:
        const { response } = action.payload;

         return {
              ...state,
             response,
          };

        default:
            return state;
        }
    }


export default reducer;