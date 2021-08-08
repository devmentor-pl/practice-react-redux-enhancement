const initialState = {
  searchQuery: "",
  question: [],
  requestInProgress: false,
  order: "desc",
  sort: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "searchQuery":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "fetchingData":
      return {
        ...state,
        requestInProgress: true,
      };
    case "setQuerysData":
      return {
        ...state,
        question: action.payload.items,
        requestInProgress: false,
      };
    case "updateOrder":
      return {
        ...state,
        order: action.payload,
      };
    case "updateSort":
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};
export default reducers;
