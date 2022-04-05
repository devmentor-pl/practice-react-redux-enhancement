const url = 'https://api.github.com';

export const getRepos = (userName) => {
  return fetch(`${url}/users/${userName}/repos`)
    .then((resp) => handleErrors(resp))
    .then((resp) => resp.json());
};

export const handleErrors = (resp) => {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }

  return resp;
};
