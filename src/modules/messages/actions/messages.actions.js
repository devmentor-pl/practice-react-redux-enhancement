import types from "../types/messages.types";

export const setMessage = (err) => {
  return {
    type: types.SET_MESSAGE,
    payload: { message: err.toString(), type: "error" },
  };
};
