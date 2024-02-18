import githubTypes from './github.types'

const getUserRepos = repos => ({
	type: githubTypes.GET_USER_REPOS,
	payload: repos,
})

const filterRepos = data => ({
	type: githubTypes.FILTER_REPOS,
	payload: data,
})

export default { getUserRepos, filterRepos }
