import React from "react";
import StackoverflowAPI from "./stackoverflow.api";
import { useDispatch, useSelector } from "react-redux";
import { showStacks } from "./stackoverflow.actions";

export const Stackoverflow = () => {
  const dispatch = useDispatch();
  const stacks = useSelector((state) => state.stacks);
  const dataFromApi = new StackoverflowAPI();
  const [title, setTitle] = React.useState("");
  const [sort, setSort] = React.useState("votes");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const getStacksAction = (title, sort) => (dispatch) => {
    dataFromApi
      .getStack(title, sort)
      .then((resp) => dispatch(showStacks(resp)))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getStacksAction(title, sort));
    console.log(stacks);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onChange} value={title} placeholder={"TITLE"} />
      <button>FIND</button>
    </form>
  );
};
