import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserName, updateReposFilter, getAllRepos } from './github.actions'
import GitHubAPI from './github.api'
import GitHubStyledComponent from './github.styled'

const GitHubComponent = () => {
    const userName = useSelector( state => state.gitHub.userName )
    const repoFilter = useSelector( state => state.gitHub.repoFilter )
    const allRepos = useSelector( state => state.gitHub.allRepos )
    const dispatch = useDispatch()
    const api = new GitHubAPI()
 
    const getData = () => {
        api.getRepos(userName)
        .then(repos => dispatch(getAllRepos(repos)))
        .catch(e => console.log(e.message))
    }
    const FilteredRepos = allRepos.map(repo => {
        if(repo.name.includes(repoFilter)) 
            return <li key={repo.name}>{repo.name}</li>
    })

    return (
        <GitHubStyledComponent>
            <label>User name:</label>
            <input type="text" onChange={e => dispatch(updateUserName(e.target.value))}/>
            <button onClick={ () => getData() }>Get user repos</button><br/>
            <label>Filter:</label>
            <input type="text" onChange={e => dispatch(updateReposFilter(e.target.value))}/><br/>
            <h4>Filtered repos:</h4>
            <ul>
                {FilteredRepos}
            </ul>
        </GitHubStyledComponent>
    )
}

export default GitHubComponent