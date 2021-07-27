import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getQuery,
  getSearchedResults,
  updateOrder,
  updateSort,
} from "./stackoverflow.actions";

const StackOverflow = () => {
  const { searchQuery, question, requestInProgress, order, sort } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const isInitilMount = useRef(true);

  const handleSearchQuery = (e) => {
    const { value } = e.target;
    dispatch(getQuery(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchedResults());
  };

  const printResult = () => {
    if (question.length !== 0) {
      return question.map((item) => (
        <li key={item.question_id}>{item.title}</li>
      ));
    } else if (question.length === 0 && !searchQuery) {
      return <p>No result found!</p>;
    }
  };

  useEffect(() => {
    if (isInitilMount.current) {
      isInitilMount.current = false;
    } else {
      dispatch(getSearchedResults());
    }
  }, [order, sort]);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Search StackOverflow API</h3>
        <label htmlFor="query">Search repos: </label>
        <input type="text" id="query" onChange={handleSearchQuery} />
        <button type="submit">Search</button>
      </form>
      <label htmlFor="order-select">Order: </label>
      <select
        name="order"
        id="order-select"
        onChange={(e) => dispatch(updateOrder(e.target.value))}
      >
        <option value="">Please choose order</option>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
      <label>Sort by: </label>
      <input
        type="radio"
        id="date"
        name="sorting"
        value="activity"
        onChange={(e) => dispatch(updateSort(e.target.value))}
      />
      <label htmlFor="date">Date</label>
      <input
        type="radio"
        id="reputation"
        name="sorting"
        value="votes"
        onChange={(e) => dispatch(updateSort(e.target.value))}
      />
      <label htmlFor="reputation">Reputation</label>
      <h3>Result:</h3>
      <ul>{requestInProgress ? <p>Loading...</p> : printResult()}</ul>
    </section>
  );
};

export default StackOverflow;
