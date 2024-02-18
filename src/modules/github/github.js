import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from './github.api'
import githubActions from './github.actions'

const GithubForm = () => {
	const dispatch = useDispatch()
	const repos = useSelector(state => state.git.repos)
	const [username, setUsername] = useState('')
	const [filteredWord, setFilteredWord] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(getRepos(username))
	}

	const handleInputChange = e => {
		const searchTerm = e.target.value
		setFilteredWord(searchTerm)
		dispatch(githubActions.filterRepos(filteredWord))
		if (e.target.value === '') {
			dispatch(getRepos(username))
		}
	}

	const reposItems = repos.map(repo => {
		return <li id={repo.id}>{repo.name}</li>
	})

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Wpisz nazwę użytownika GitHub:
						<input value={username} onChange={e => setUsername(e.target.value)} />
					</label>
				</div>
				<input type="submit" value="Szukaj" />
			</form>
			<ul>{reposItems}</ul>
			<div>
				<input onChange={handleInputChange} placeholder="Filtruj" />
			</div>
		</section>
	)
}

export default GithubForm
