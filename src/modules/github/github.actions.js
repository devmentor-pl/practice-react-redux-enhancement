import types from "./github.types";
import {GitHubAPI} from './github.api'

const api = new GitHubAPI();


// export const loadDataAction = (userValue) => (dispatch, getState) => {
// 	const state = getState();
// 	api.getUser(userValue).then( resp => {
//           if(resp.ok) { return resp.json(); }
//           throw new Error('Err!');
//         })

   
// };
export const loadDataAction = (userValue) => (dispatch, getState) => {
    return fetch(api.url)
    .then( resp => {
      if(resp.ok) { return resp.json(); }
      throw new Error('Err!');
    })
     .then( userValue => api.getUser(userValue))
     .then( userValue => dispatch(getUserAction(userValue)))
   
    }

export const getUserAction = userValue => {
  return {
    type: types.GET_USER,
    payload: {
      userValue
    },
  };
};

export const getReposAction = repos => {
  return {
    type: types.GET_REPOS,
    payload: {
     repos,
    },
  };
};


