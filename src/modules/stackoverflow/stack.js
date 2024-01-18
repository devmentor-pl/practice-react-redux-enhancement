import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchStackStart,
  fetchStackSuccess,
  fetchStackFailure,
} from './stack.actions';
import StackAPI from './stack.api';

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
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button type="submit">Search</button>

      {isFetching && <p>Loading...</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}

      <ul>
        {Array.isArray(sortedQuestions) &&
          sortedQuestions.map((question) => {
            const creationDate = new Date(question.creation_date * 1000);
            const formattedDate = creationDate.toLocaleDateString();
            const formattedTime = creationDate.toLocaleTimeString();

            return (
              <li key={question.question_id} style={{ margin: '10px 0' }}>
                <h1>
                  <span>Title:</span>{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={question.link}
                  >
                    {question.title}
                  </a>
                </h1>
                <div>
                  <span>Author:</span> {question.owner.display_name}
                  <span>Reputation:</span> {question.owner.reputation}
                </div>
                <div>
                  <span>Views:</span> {question.view_count}
                </div>
                <div>
                  <span>Creation Date:</span> {formattedDate} {formattedTime}
                </div>
              </li>
            );
          })}
      </ul>
    </form>
  );
};

export default Stack;
