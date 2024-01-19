import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStackStart,
  fetchStackSuccess,
  fetchStackFailure,
} from './stack.actions';
import StackAPI from './stack.api';
import { StyledStackComponent } from './stack.styled';

const Stack = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const isFetching = useSelector((state) => state.isFetching);
  const errorMessage = useSelector((state) => state.errorMessage);
  console.log(questions);

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(fetchStackStart());
    try {
      const api = new StackAPI();
      const data = await api.getQuestions(searchTerm);
      dispatch(fetchStackSuccess(data.items));
    } catch (error) {
      dispatch(fetchStackFailure(error.message));
    }
  };

  const sortedQuestions = questions.sort((a, b) => {
    const reputationDiff = b.owner.reputation - a.owner.reputation;

    if (reputationDiff === 0) {
      return b.creation_date - a.creation_date;
    }

    return reputationDiff;
  });

  return (
    <StyledStackComponent onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
        className="stack__input"
      />
      <button type="submit" className="stack__button">
        Search
      </button>

      {isFetching && <p className="stack__loading">Loading...</p>}
      {errorMessage && <p className="stack__error">Error: {errorMessage}</p>}

      <ul className="stack__list">
        {Array.isArray(sortedQuestions) &&
          sortedQuestions.map((question) => {
            const creationDate = new Date(question.creation_date * 1000);
            const formattedDate = creationDate.toLocaleDateString();
            const formattedTime = creationDate.toLocaleTimeString();

            return (
              <li key={question.question_id} className="stack__item">
                <h1 className="stack__title">
                  <span>Title: </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={question.link}
                    className="stack__link"
                  >
                    {question.title}
                  </a>
                </h1>
                <address className="stack__author">
                  Author: <a rel="author">{question.owner.display_name}</a>
                </address>
                <p className="stack__reputation">
                  Reputation: {question.owner.reputation}
                </p>
                <p className="stack__views">Views: {question.view_count}</p>
                <div className="stack__date">
                  <p>
                    Creation Date: {formattedDate} at {formattedTime}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </StyledStackComponent>
  );
};

export default Stack;
