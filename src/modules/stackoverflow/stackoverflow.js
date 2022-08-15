import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStacksAction } from "./stackoverflow.actions";

const Stackoverflow = () => {
  const dispatch = useDispatch();
  const stacks = useSelector((props) => props.stacks);

  const [title, setTitle] = useState("");
  const [active, setActive] = useState("creation");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getStacksAction(title, active));
    setTitle("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    setActive(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder="Wpisz tytuł"
          onChange={handleChange}
        />
        <p>Sortuj:</p>
        <select name="sort" id="sort" onChange={handleClick}>
          <option value="creation">Data</option>
          <option value="votes">Punkty</option>
        </select>
        <input type="submit" value="Szukaj" />
      </form>
      <section>
        {stacks.stacks.length > 0 ? (
          <ol>
            {stacks.stacks.map(({ score, link, title }, index) => (
              <li key={index}>
                {title}
                <ul>
                  <li>
                    Link: <a href={link}>{link} </a>
                  </li>
                  <li>Punkty: {score}</li>
                </ul>
              </li>
            ))}
          </ol>
        ) : null}
      </section>
    </>
  );
};

export default Stackoverflow;
