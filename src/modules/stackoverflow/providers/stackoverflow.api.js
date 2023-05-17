const url =
  "https://api.stackexchange.com/2.3/similar?order=desc&sort=creation&site=stackoverflow";

export const handleErrors = (resp) => {
  if (!resp.ok) throw Error(resp.status);

  return resp;
};

export const getSimilar = (query) =>
  fetch(`${url}&title=${query}`)
    .then(handleErrors)
    .then((resp) => resp.json());
