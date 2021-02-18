import types from '../stackOverflow/stackOverflow.types';

const initState = {
        title: [],
        response: [],
}

const reducerStackOverFlow = (state = initState, action) => {
    switch(action.type) {

        case types.GET_TITLE:
        const {title} = action.payload;
        return {
           ...state,
           title,
        
        }

        case types.SET_RESPONSE:
        const { response } = action.payload;
        // console.log(response)

         return {
              ...state,
             response: response,
          };

        default:
            return state;
        }
    }


export default reducerStackOverFlow;