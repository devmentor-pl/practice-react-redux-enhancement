
import React, {useState, useEffect}  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "regenerator-runtime/runtime.js";
import {loadDataAction, getUserAction, getReposAction} from './github.actions'


const Github = () => {
    const {user, repos} = useSelector(state => state.github)
    const dispatch = useDispatch();
 
    // const user = useSelector(state => state.userValue);
    // const repos = useSelector(state => state.repos);

    // const [userValue, setUser] = useState(user);
    //zostawiam te komentarze, do omówienia
  

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(loadDataAction(user));
        // form.reset();  jak sie czysci input jak mam dispatch ?
    }

    const renderRepos = () => {
        if(repos !== 0) {
            return renderAllRepos(repos)
        } else if (repos.length === 0){
                return <span>this user has no repositories!</span>
                // to chyba nie działa?
         }
    }


    const renderAllRepos = repos => {
        const reposList = repos.map((repo, id) => {
            return <li key={id}>{repo}</li>
        })
        return <ul>{reposList}</ul>
    }

    return (

        <>
            <h1>Github User Search </h1>
             <form onSubmit={ handleSubmit }>
             <input   onChange={ (({target}) => dispatch(getUserAction(target.value))) }
                      value={ user } />
             {/* <input   onChange={ ({target}) => setUser(target.value) }
                      value={ userValue } /> */}
                      
             <input type="submit" value="save" />
             <h3>Repos:</h3>
       
			{renderRepos()}
             </form>
        
        </>
    )
}



export default Github;