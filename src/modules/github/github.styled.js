import styled from 'styled-components';

export const StyledGitHubComponent = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;

  .github__form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .github__label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .github__input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .github__button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  .github__loading,
  .github__error {
    text-align: center;
    margin-top: 20px;
  }

  .github__error {
    color: red;
  }

  .github__list {
    list-style: none;
    padding: 0;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #007bff #f4f4f4;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #f4f4f4;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #007bff;
      border-radius: 10px;
      border: 2px solid #f4f4f4;
    }
  }

  .github__item {
    background-color: white;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    &:last-child {
      border-bottom: none;
    }
  }
`;
