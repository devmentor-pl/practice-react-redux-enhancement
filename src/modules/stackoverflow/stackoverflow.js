import React, { useState } from 'react';
import { getStackAction } from './stackoverflow.action';
import { useSelector, useDispatch } from 'react-redux';

const Stack = () => {
  const dispatch = useDispatch();
  const solutions = useSelector((props) => props.stacks.stacks);
  const error = useSelector((props) => props.stacks.err);
  const [title, setTitle] = useState('');
  const [active, setActive] = useState('creation');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getStackAction(title, active));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    e.persist();
    setActive(e.target.value);
  };

  const createDate = (miliseconds) => {
    const fulldate = new Date(miliseconds * 1000);
    const day = fulldate.getDate();
    const month = fulldate.getMonth() + 1;
    const year = fulldate.getFullYear();
    const date = `${year}/${month}/${day}`;
    return date;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder='wpisz temat'
          onChange={handleChange}
        />
        <p>Sortuj według: </p>
        <input
          type='radio'
          id='creation'
          name='sort'
          value='creation'
          onChange={handleClick}
          checked={active === 'creation'}
        />
        <label htmlFor='creation'>daty</label>
        <input
          type='radio'
          id='votes'
          name='sort'
          value='votes'
          onChange={handleClick}
          checked={active === 'votes'}
        />
        <label htmlFor='votes'>punktów</label>
        <input type='submit' value='Szukaj' />
      </form>
      <section>
        {solutions.length > 0 ? (
          <ul>
            {solutions.map(
              ({
                question_id,
                creation_date,
                is_answered,
                score,
                link,
                title,
              }) => (
                <li key={question_id}>
                  {title}
                  <ul>
                    <li>
                      <a href={link}> {link} </a>
                    </li>
                    <li>data utworzenia: {createDate(creation_date)}</li>
                    <li>odpowiedź: {is_answered ? 'tak' : 'nie'}</li>
                    <li>punkty: {score}</li>
                  </ul>
                </li>
              )
            )}
          </ul>
        ) : null}
        {error.length > 0 && <p>Błąd status: {error}</p>}
      </section>
    </>
  );
};

export default Stack;
