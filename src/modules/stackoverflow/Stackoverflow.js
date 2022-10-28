import React from "react";
import StackoverflowAPI from "./stackoverflow.api";
import { useDispatch, useSelector } from "react-redux";
import { showStacks } from "./stackoverflow.actions";

export const Stackoverflow = () => {
  const dispatch = useDispatch();
  const stacks = useSelector((state) => state.stacks);
  const dataFromApi = new StackoverflowAPI();
  const [title, setTitle] = React.useState("");
  const [sort, setSort] = React.useState("creation");

  const getStacksAction = (title, sort) => (dispatch) => {
    dataFromApi
      .getStack(title, sort)
      .then((resp) => dispatch(showStacks(resp)))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getStacksAction(title, sort));
  };

  const onClick = () => {
    sort === "creation" ? setSort("votes") : setSort("creation");
    dispatch(getStacksAction(title, sort));
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder={"TITLE"}
        />
        <button>FIND</button>
      </form>
      <ol>
        <button onClick={onClick}>
          SORT BY {sort === "creation" ? "VOTES" : "CREATION"}
        </button>
        {stacks.map((data) => {
          return (
            <li key={data.question_id}>
              <a
                href={data.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {data.title}
              </a>
            </li>
          );
        })}
      </ol>
    </>
  );
};
