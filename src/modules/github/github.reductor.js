import types from './../github/github.types';

const initState = {
        userValue: [],
        repos: [],
}

const reducer = (state = initState, action) => {
    switch(action.type) {

        case types.GET_USER:
        const {userValue} = action.payload;
        return {
           ...state,
           userValue,
        
        }

        case types.GET_REPOS:
        const { repos } = action.payload;

         return {
              ...state,
              repos,
          };

        default:
            return state;
        }
    }


export default reducer;