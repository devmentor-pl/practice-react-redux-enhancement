import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "./stack.action";

const Stackoverflow = () => {
  const init = { title: "" };
  const [state, setState] = useState(init);
  const [sort, setSort] = useState("activity");

  const options = ["activity", "votes", "creation", "relevance"];
  const data = useSelector((state) => state.stack.data);
  const error = useSelector((state) => state.stack.error);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSort = (e) => {
    setSort(e.target.value);
    console.log(sort);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDataApi(state.title, sort));
    console.log(data);
    setState({ ...state, title: "" });
  };

  const setItems = (items) => {
    return items.map((item) => (
      <li>
        <a href={item.link}>{item.link}</a>
      </li>
    ));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Search..."
          value={state.title}
          onChange={handleChange}
        />

        <label htmlFor="filter">Filter:</label>
        <select onChange={(e) => handleSort(e)} id="filter">
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input type="submit" value="Szukaj" />
      </form>
      <ul>{Object.keys(data).length > 0 && setItems(data.items)}</ul>
      {error.length > 0 && <p>Nie znaleziono podobnych wątków.</p>}
    </section>
  );
};
export default Stackoverflow;
