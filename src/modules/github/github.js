import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { loadRepos,filterRepos } from './github.actions';

const GitHub = () => {
    const reposList = useSelector(store=>store.github.repos);
    const [inputUserName, setInputUserName] = useState('');
    const [inputFilterText, setInputFilterText] = useState('');
    const dispatch = useDispatch();
    console.log(reposList);

    const handleShowRepo = (e)=>{
        e.preventDefault();
        dispatch(loadRepos(inputUserName));
        setInputUserName('');
    }

    const handleFilterRepo = (e) =>{
        e.preventDefault();
        dispatch(filterRepos(inputFilterText));
        setInputFilterText('');
    }

    const renderReposList = () => {
        return reposList.map(repo => renderReposItem(repo));
    }

    const renderReposItem = repo => {
        return (
            <li key={repo.id}>{repo.name}</li>
        )
    }

    return(
        <>
            <p>Wpisz nazwę uzytkownika</p>
            <form>
                <div>
                    <input type='text' placeholder='EwelinaKopacz' value={inputUserName} onChange={e => setInputUserName(e.target.value)}/>
                    <button onClick={handleShowRepo}>WYŚWIETL</button>
                </div>
                <div>
                    <input type='text' placeholder='react' value={inputFilterText} onChange={e=> setInputFilterText(e.target.value)}/>
                    <button onClick={handleFilterRepo}>FILTRUJ</button>
                </div>
            </form>
            <p>Repos List:</p>
            <div>
                <ol>
                    {renderReposList()}
                </ol>
            </div>
        </>
    )
}

export default GitHub;