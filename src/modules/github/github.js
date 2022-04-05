import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReposAction } from './github.actions';

const Github = () => {
  const dispatch = useDispatch();
  const initState = {
    user: '',
    filter: '',
  };
  const [state, setState] = useState(initState);
  const { user, filter } = state;
  const error = useSelector((props) => props.repos.error);
  const repos = useSelector((props) => props.repos.repos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getReposAction(user));
    setState({ ...state, user: '' });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const filterRepos = (items) => {
    return items.name.toUpperCase().includes(filter.toUpperCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name='user'
          value={user}
          placeholder='Nazwa użytkownika'
        />
        <input type='submit' value='Szukaj' />
        <input
          name='filter'
          value={filter}
          onChange={handleChange}
          placeholder='filter'
        />
      </form>
      {repos.length > 0 ? (
        <>
          <h3>Repositories:</h3>
          <ul>
            {repos
              .filter((item) => filterRepos(item))
              .map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
          </ul>
        </>
      ) : null}
      {error.length > 0 && <p>Błąd status: {error}</p>}
    </>
  );
};

export default Github;
