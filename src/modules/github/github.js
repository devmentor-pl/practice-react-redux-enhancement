import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReposAction, setUserAction} from "./github.actions";

const GitHub = () => {
    const [user, setUser] = useState('');
    const [phrase, setPhrase] = useState('');
    const dispatch = useDispatch();
    const repos = useSelector(state => state.github.repos)
    const handleChange = event => {
        event.target.name === 'user' 
        ? setUser(event.target.value) 
        : setPhrase(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(setUserAction(user))
        dispatch(getReposAction())
        setUser('')

    }
    return (
        <section style={{width: '30%'}}>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column' }}>
                <label>User:</label>
                <input name="user" value={user} onChange={handleChange}></input>
                <input type="submit" ></input>
            </form>
            <div>
                <h1>Repositories:</h1>
                <label>Filter:</label>
                <input name="repo" value={phrase} onChange={handleChange}></input>
                <ul>{
                repos ? repos.filter(repo => repo.name.includes(phrase)).map(element=> <li key={element.name}>{element.name}</li>) : null }</ul>
            </div>
        </section>
    )
}

export default GitHub