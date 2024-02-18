import stackoverflowTypes from './stackoverflow.types'

const searchStack = data => ({
	type: stackoverflowTypes.SEARCH_IN_STACK,
	payload: data,
})

const sortData = data => ({
	type: stackoverflowTypes.SORT_DATA,
	payload: data,
})

export default { searchStack, sortData }
