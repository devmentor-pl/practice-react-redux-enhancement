import githubActions from './github.actions'
const url = 'https://api.github.com'

export const getRepos = name => {
	return function thunk(dispatch) {
		return fetch(`${url}/users/${name}/repos`)
			.then(resp => {
				if (resp.ok) {
					return resp.json()
				}
				throw new Error('Error')
			})

			.then(resp => {
				dispatch(githubActions.getUserRepos(resp))
			})
			.catch(error => {
				console.error('Error fetching repositories:', error)
			})
	}
}
