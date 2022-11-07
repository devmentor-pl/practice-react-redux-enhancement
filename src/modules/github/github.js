import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPhrase, setLogin, getRepos } from './github.actions';

const GitHub = () => {
    const { login, phrase, repos } = useSelector(state => state);
    const dispatch = useDispatch();

    function handleLoginChange(e) {
        const login = e.target.value;
        dispatch(setLogin(login));
        dispatch(getRepos(login));
    }

    return (
        <section>
            <form>
                <input name="login" value={login}
                    onChange={handleLoginChange}></input>
                <input name="phrase" value={phrase}
                    onChange={e => dispatch(setPhrase(e.target.value))}></input>
            </form>
            <ul>
                {repos.filter(r => r.name.includes(phrase)).map(r => <li key={r.id}><a href={r.url}>{r.name}</a></li>)}
            </ul>
        </section>
    )
}

export default GitHub;