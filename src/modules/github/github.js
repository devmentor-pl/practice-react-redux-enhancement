import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos, setLogin, setPhrase } from "./";

const Github = () => {
    const { login, phrase, repos } = useSelector(state => state.github)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        if (login.trim().length > 0) {
            dispatch(getRepos(login))
        } else {
            alert('No valid data')
        }

    }

    const userNameChangeHandler = (e) => {
        dispatch(setLogin(e.target.value))
    }

    const filterHandler = (e) => {
        dispatch(setPhrase(e.target.value))
    }

    const renderRepos = () => {
        const filteredReposArr = repos.filter(item => item.name.toLowerCase().includes(phrase.toLowerCase()))

        return filteredReposArr.map(({ id, name, html_url }) => {
            return <li key={id}><a href={html_url}>{name}</a></li>
        })
    }

    return (
        <>
            <h4>Look for Github repositories!</h4>
            <form onSubmit={submitHandler}>
                <label htmlFor="">
                    <input type="text" placeholder="User Name" onChange={userNameChangeHandler} value={login} />
                </label>
                <input type="submit" value="submit" />
            </form>
            {repos.length !== 0 && (
                <div>
                    <label htmlFor="">
                        <input type="text" placeholder='Filter tasks' onChange={filterHandler} value={phrase} />
                    </label>
                    {renderRepos()}
                </div>
            )}
        </>
    )
}

export default Github