import stackoverflowActions from './stackoverflow.actions'

export const getTopics = title => {
	return function thunk(dispatch) {
		return fetch(
			`https://api.stackexchange.com/2.3/similar?order=desc&sort=activity&title=${title}filter=default&site=stackoverflow`
		)
			.then(resp => {
				if (resp.ok) {
					return resp.json()
				}
				throw new Error('Error')
			})
			.then(data => {
				dispatch(stackoverflowActions.searchStack(data.items))
			})
			.catch(error => {
				console.error('Error fetching stack:', error)
			})
	}
}
