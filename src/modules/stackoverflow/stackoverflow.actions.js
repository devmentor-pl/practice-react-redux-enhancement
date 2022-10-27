import types from "./stackoverflow.types";

export const showStacks = (data) => {
  return {
    type: types.SHOW_STACKS,
    payload: data.items,
  };
};
