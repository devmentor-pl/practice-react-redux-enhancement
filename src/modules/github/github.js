import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPhraseAction, setLoginAction, getReposAction } from './github.actions'

const GitHub = () => {
  const {login, phrase, repos} = useSelector(state => state.github)
  const dispatch = useDispatch()

  function setLoginHandler(e) {
    const login = e.target.value
    dispatch(setLoginAction(login))
  }

  function getReposHandler(e) {
    const login = e.target.value
    dispatch(getReposAction(login))
  }

    return (
      <section>
        <form action="">
          <input name="login" value={login} onChange={setLoginHandler} onBlur={getReposHandler} />
          <input name="phrase" value={phrase} onChange={e => dispatch(setPhraseAction(e.target.value))}/>
        </form>
        <ul>  
          {repos.filter(r => r.name.includes(phrase)).map(r => <li key={r.id}><a href={r.url}>{r.name}</a></li>)}
        </ul>
      </section>
    )
}

export default GitHub