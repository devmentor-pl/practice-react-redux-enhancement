import { produce } from 'immer'
import githubTypes from '../modules/github/github.types'

const initialState = {
	repos: [],
}

const gitReducer = (state = initialState, action) => {
	switch (action.type) {
		case githubTypes.GET_USER_REPOS:
			return produce(state, draftState => {
				draftState.repos = action.payload
			})

		case githubTypes.FILTER_REPOS:
			return produce(state, draftState => {
				draftState.repos = draftState.repos.filter(repo => repo.name.includes(action.payload))
			})
		// return {
		// 	...state,
		// 	repos: state.repos.filter(repo => repo.name.includes(action.payload)),
		// }
		default:
			return state
	}
}

export default gitReducer
