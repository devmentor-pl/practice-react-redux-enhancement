import types from "./github.types";
import {GitHubAPI} from './github.api'

const api = new GitHubAPI();


export const loadData = () => (dispatch, getState) => {
	const state = getState();
	api.getUser(value).then((resp) => {
		const reposNames = resp.map((repo) => repo.name);
		dispatch(getRepos(reposNames));
	});
};


// export const loadData = () => {
//   return function thunk(dispatch, getState) {
//     return fetch(url)
//       .then( resp => {
//       if(resp.ok) { return resp.json(); }
//       throw new Error('Err!');
//       })
//       .then( resp => dispatch(getUser( resp )))
//       .catch( err => dispatch(getRepos( err )))
//       }
//   }


export const getUser = user => {
  return {
    type: types.GET_USER,
    payload: {
       user
    },
  };
};
export const getRepos = user => {
  return {
    type: types.GET_REPOS,
    payload: {
     repos,
    },
  };
};


