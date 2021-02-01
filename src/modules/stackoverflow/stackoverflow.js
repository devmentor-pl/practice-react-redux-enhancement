import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StackOverflowAPI } from "./stackoverflow.api";
import { loadQuestionsAction } from "./stackoverflow.actions";
import { debounce } from "../../utils/debounce";

const StackOverflow = () => {
  const api = new StackOverflowAPI();

  const sorts = ["activity", "creation", "votes", "relevance"];
  const orders = ["desc", "asc"];
  const { questions } = useSelector(state => state.stackoverflow);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState(orders[0]);
  const [sort, setSort] = useState(sorts[0]);

  const fetchQuestions = useCallback(
    debounce((title, sort, order) => {
      dispatch(loadQuestionsAction([]));

      api
        .getQuestions(title, sort, order)
        .then(response => {
          dispatch(loadQuestionsAction(response.items));
        })
        .catch(err => console.error(err));
    }, 200),
    []
  );

  useEffect(() => {
    if (title.trim().length > 0) {
      fetchQuestions(title, sort, order);
    }
  }, [title, sort, order]);

  return (
    <div>
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="sort">
        Sort
        <select id="sort" value={sort} onChange={e => setSort(e.target.value)}>
          {sorts.map(sort => {
            return (
              <option key={sort} value={sort}>
                {sort}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="order">
        Order
        <select
          id="order"
          value={order}
          onChange={e => setOrder(e.target.value)}
        >
          {orders.map(order => {
            return (
              <option key={order} value={order}>
                {order}
              </option>
            );
          })}
        </select>
      </label>

      <ul>
        {questions.map(question => {
          return (
            <li key={question.question_id}>
              {question.title}
              <br />
              <a href={question.link}>Go to the question</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StackOverflow;
