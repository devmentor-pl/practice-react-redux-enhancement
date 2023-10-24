import React, { useState } from "react";
import { GitHubAPI } from "./";
import { useDispatch, useSelector } from "react-redux";
import { updateReposArr } from "./";

const Github = () => {
    const [userName, setUserName] = useState('')
    const [filterTaskName, setFilterTaskName] = useState('')

    const repos = useSelector(state => state.repos)
    const dispatch = useDispatch()

    const gitHubApi = new GitHubAPI()

    const submitHandler = (e) => {
        e.preventDefault()

        if (userName.trim().length > 0) {
            gitHubApi.getRepos(userName)
                .then(data => {
                    if (typeof data !== 'undefined') {
                        dispatch(updateReposArr(data))
                    } else console.log('invalid User Name')
                })
        } else {
            alert('no valid data')
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
            <form onSubmit={submitHandler}>
                <label htmlFor="">User Name
                    <input type="text" onChange={userNameChangeHandler} value={userName} />
                </label>
                <input type="submit" />
            </form>
            {repos.length !== 0 && (
                <div>
                    <label htmlFor="">Filter tasks
                        <input type="text" onChange={filterHandler} value={filterTaskName} />
                    </label>
                    {renderRepos()}
                </div>
            )}
        </>
    )
}

export default Github