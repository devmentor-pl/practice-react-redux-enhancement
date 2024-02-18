import { produce } from 'immer'
import stackoverflowTypes from '../modules/stackoverflow/stackoverflow.types'

const initialState = { data: [] }

const stackReducer = (state = initialState, action) => {
	switch (action.type) {
		case stackoverflowTypes.SEARCH_IN_STACK:
			return produce(state, draftState => {
				draftState.data = action.payload
			})
		case stackoverflowTypes.SORT_DATA:
			return produce(state, draftState => {
				draftState.data = [...state.data].sort((a, b) => {
					return a.score - b.score && a.creation_date - b.creation_date
				})
			})
		default:
			return state
	}
}

export default stackReducer
