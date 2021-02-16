import types from "./github.types";
import {GitHubAPI} from './github.api'

const api = new GitHubAPI();

export const loadDataAction = (userValue) => (dispatch, getState) => {

	api.getRepos(userValue).then((resp) => {
		const reposNames = resp.map((repo) => repo.name);
		dispatch(getReposAction(reposNames));
	});
  
  }
// export const loadDataAction = (userValue) => (dispatch, getState) => {
//     return fetch(api.url)
    
//     .then( resp => {
//       if(resp.ok) { return resp.json(); }
//       throw new Error('Err!');
//     })
//     //  .then( userValue => api.getUser(userValue))
//     //  .then( userValue => dispatch(getUserAction(userValue))
   
//     .then((reps => dispatch(getUserAction(reps)))
//     .then((reps => dispatch(getReposAction(reps)))
//     )
//     );
//   }

export const getUserAction = userValue => {
  return {
    type: types.GET_USER,
    payload: {
      userValue,
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


