import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getReposAction } from "./github.actions";

const Github = () => {

    const dispatch = useDispatch()

    const initState = {user:''}
   
    const repos = useSelector(props => props.repos)
    const error = useSelector(props => props.error)

    const [state, setState] = useState(initState)
    const {user} = state

    const submitHandler = e => {
        e.preventDefault()
        dispatch(getReposAction(user))
        setState({...state, user:''})
    }

    const handleChange = e => {
        e.preventDefault();
        setState({...state, [e.target.name]: e.target.value})
    }

    const errorStyle = {
        color: 'red',
    }

    return (
        <section>
            <form onSubmit={submitHandler}>
                <input name="user" value={user} onChange={handleChange} placeholder='nick usera'/> 
                <input type='submit' value='znajdź usera'/>
            </form>

            {repos.length >0 ? 
            <ul>{repos.map(item=><li key={item.id}>{item.name}</li>)}</ul>: null}

            {error.length>0 && <p style={errorStyle}> User nie istnieje </p>}

        </section>
    )
}

export default Github
