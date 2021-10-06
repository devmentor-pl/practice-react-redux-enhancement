import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNameField, getFilteredRepos, getRepos } from './github.actions';
import GitHubStyledComponent from './github.styled';
import InputStyled from './Input.styled';
import LabelStyled from './Label.styled.js'

const ReposComponent = () => {
	const state = useSelector((state) => state);
	const { values, repos, filteredRepos } = state;
	const dispatch = useDispatch();

	useEffect(() => {
		const filteredRepos = repos.filter((repoName) =>
			repoName.includes(values.searchedString)
		);
		dispatch(getFilteredRepos(filteredRepos));
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
			? alert('Write the user first.')
			: dispatch(getNameField(name, value));
	};

	return (
		
		<section>
			<h2>Task 03</h2>
			<GitHubStyledComponent>
			<form onSubmit={(e) => HandleSubmit(e)}>
			<LabelStyled>
					User:
					<InputStyled
						name="user"
						value={values.user ? values.user : ''}
						onChange={(e) => handleChange(e.target)}
					/>
				<button>Search</button>
				</LabelStyled>
				<LabelStyled>
					Search repo:
					<InputStyled
						name="searchedString"
						value={
							values.searchedString ? values.searchedString : ''
						}
						onChange={(e) => handleChange(e.target)}
					/>
				</LabelStyled>
			</form>
			<h3>Repos:</h3>
			{renderRepos()}
			</GitHubStyledComponent>
		</section>
	
	);
};

export default ReposComponent;