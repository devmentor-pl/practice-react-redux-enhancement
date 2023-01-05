import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "./stack.action";

const Stackoverflow = () => {
  const init = { title: "" };
  const [state, setState] = useState(init);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };
  const data = useSelector((props) => props.data);
  const error = useSelector((props) => props.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDataApi(state.title));
    setState({ ...state, title: "" });
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
        <input type="submit" value="Szukaj" />
      </form>
      <ul>{console.log(data)}</ul>
    </section>
  );
};
export default Stackoverflow;
