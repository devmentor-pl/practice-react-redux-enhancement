import React, { useState } from "react";
import { GitHubAPI } from "./";
import { useDispatch, useSelector } from "react-redux";
import { updateReposArr } from "./";

const Github = () => {
    const [userName, setUserName] = useState('')
    const [filterTaskName, setFilterTaskName] = useState('')

    const repos = useSelector(state => state.github.repos)
    const dispatch = useDispatch()

    const gitHubApi = new GitHubAPI()

    const submitHandler = (e) => {
        e.preventDefault()

        if (userName.trim().length > 0) {
            gitHubApi.getRepos(userName)
                .then(data => {
                    if (typeof data !== 'undefined') {
                        dispatch(updateReposArr(data))
                    } else console.log('Invalid User Name')
                })
        } else {
            alert('No valid data')
        }

    }

    const userNameChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const filterHandler = (e) => {
        setFilterTaskName((e.target.value))
    }

    const renderRepos = () => {
        const filteredReposArr = repos.filter(item => item.name.toLowerCase().includes(filterTaskName.toLowerCase()))
       
        return filteredReposArr.map(({ id, name }) => {
            return <li key={id}>{name}</li>
        })
    }

    return (
        <>
            <h4>Look for Github repositories!</h4>
            <form onSubmit={submitHandler}>
                <label htmlFor="">
                    <input type="text" placeholder="User Name" onChange={userNameChangeHandler} value={userName} />
                </label>
                <input type="submit" value="submit" />
            </form>
            {repos.length !== 0 && (
                <div>
                    <label htmlFor="">
                        <input type="text" placeholder='Filter tasks' onChange={filterHandler} value={filterTaskName} />
                    </label>
                    {renderRepos()}
                </div>
            )}
        </>
    )
}

export default Github