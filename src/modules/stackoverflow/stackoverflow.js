import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTopics } from './stackoverflow.api'
import stackoverflowActions from './stackoverflow.actions'

const StackOverflow = () => {
	const dispatch = useDispatch()
	const data = useSelector(state => state.stack.data)
	const [searchTopic, setSearchTopic] = useState('')
	const sampleQuest = 'CSS3 - Transition'

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(getTopics(searchTopic))
	}

	const searchData = data.map(item => {
		return <li>{item.title}</li>
	})

	const handleSort = () => {
		dispatch(stackoverflowActions.sortData())
	}

	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Szukaj w Stack Overflow:</label>
					<input type="text" value={searchTopic} onChange={e => setSearchTopic(e.target.value)} />
				</div>
				<input type="submit" value="Szukaj" />
			</form>

			<div>
				<ul>{searchData}</ul>
			</div>
			<button onClick={handleSort}>Sortuj</button>
		</section>
	)
}

export default StackOverflow
