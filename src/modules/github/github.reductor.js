
import types from './../github/github.types';

const initState = {
        user: '',
        repos: '',
}

const reducer = (state = initState, action) => {
    switch(action.type) {

        case types.GET_USER:
        const {user} = this.state;
        return {
           ...state,
           user,
        
        }

        case types.GET_REPOS:
    
        const {repos} = this.state;
            return {
                ...state,
                repos,
            }
        }
    }


export default reducer;

