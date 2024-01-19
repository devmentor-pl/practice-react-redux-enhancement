import styled from 'styled-components';

export const StyledStackComponent = styled.form`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 650px;
  margin: 20px auto;

  .stack__input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 12px;
    width: 90%;
  }

  .stack__button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #218838;
    }
  }

  .stack__loading {
    text-align: center;
    margin-top: 20px;
    color: #007bff;
  }

  .stack__error {
    text-align: center;
    margin-top: 20px;
    color: #dc3545;
  }

  .stack__list {
    list-style: none;
    padding: 0;
    max-height: 300px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #28a745 #f9f9f9;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f9f9f9;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #28a745;
      border-radius: 10px;
      border: 2px solid #f9f9f9;
    }
  }

  .stack__item {
    background-color: white;
    padding: 15px;
    border-bottom: 2px solid #eee;
    &:last-child {
      border-bottom: none;
    }
  }

  .stack__title {
    font-size: 1.2em;
    margin-bottom: 5px;
  }

  .stack__link {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .stack__author {
    font-style: italic;
    margin-bottom: 5px;
  }

  .stack__reputation,
  .stack__views {
    font-size: 0.9em;
    margin-bottom: 5px;
  }

  .stack__date {
    font-size: 0.8em;
    color: #666;
  }
`;
