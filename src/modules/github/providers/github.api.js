const url = "https://api.github.com";

export const handleErrors = (resp) => {
  if (!resp.ok) {
    throw Error(resp.status);
  }
  return resp;
};

export const getRepos = (
  userName // https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
) =>
  fetch(`${url}/users/${userName}/repos`)
    .then(handleErrors)
    .then((resp) => resp.json());
