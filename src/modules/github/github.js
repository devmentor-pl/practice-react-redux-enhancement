import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFieldValue, setFilteredRepos, getRepos } from './github.actions';

const ReposBrowserComponent = () => {
	const state = useSelector((state) => state.github);
	const { values, repos, filteredRepos } = state;
	const dispatch = useDispatch();

	useEffect(() => {
		const filteredRepos = repos.filter((repoName) =>
			repoName.includes(values.searchedString)
		);
		dispatch(setFilteredRepos(filteredRepos));
	}, [values.searchedString]);

	const renderRepos = () => {
		if (filteredRepos.length !== 0) {
			return renderReposList(filteredRepos);
		} else if (filteredRepos.length === 0 && values.searchedString) {
			return <p>No repos found.</p>;
		} else if (repos.length !== 0) {
			return renderReposList(repos);
		}
	};

	const renderReposList = (reposGroup) => {
		const listItems = reposGroup.map((repo, index) => {
			return <li key={index}>{repo}</li>;
		});
		return <ul>{listItems}</ul>;
	};

	const HandleSubmit = (e) => {
		e.preventDefault(e);
		dispatch(getRepos());
	};

	const handleChange = ({ name, value }) => {
		name === 'searchedString' && repos.length === 0
			? alert('Write down the user first.')
			: dispatch(setFieldValue(name, value));
	};

	return (
		<section>
			<h2>Task 03</h2>
			<form onSubmit={(e) => HandleSubmit(e)}>
				<label>
					User:
					<input
						name="user"
						value={values.user ? values.user : ''}
						onChange={(e) => handleChange(e.target)}
					/>
				</label>
				<button>Search</button>
				<label>
					Search particular repo:
					<input
						name="searchedString"
						value={
							values.searchedString ? values.searchedString : ''
						}
						onChange={(e) => handleChange(e.target)}
					/>
				</label>
			</form>
			<h3>Repos:</h3>
			{renderRepos()}
		</section>
	);
};

export default ReposBrowserComponent;
