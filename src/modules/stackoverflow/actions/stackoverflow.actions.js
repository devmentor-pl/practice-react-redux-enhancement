import { setMessage } from "../../messages/actions/messages.actions";
import { getSimilar as getSimilarByProvider } from "../providers/stackoverflow.api";
import types from "../types/stackoverflow.types";

export const setSimilar = (similar) => ({
  type: types.SET_SIMILAR,
  payload: { similar: similar.items },
});

export const getSimilar = (query) => (dispatch, getState) => {
  return getSimilarByProvider(query)
    .then((resp) => dispatch(setSimilar(resp)))
    .catch((err) => dispatch(setMessage(err)));
};
