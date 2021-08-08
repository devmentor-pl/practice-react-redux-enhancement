const initialState = {
  userName: "",
  searchQuery: '',
  repos: [],
  requestInProgress: false,
  filteredRepositories: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "userNameField":
      return {
        ...state,
        userName: action.payload,
      };
      case "searchQuery":
        return {
          ...state,
          searchQuery: action.payload,
        };
    case "fetchingRepo":
      return {
        ...state,
        requestInProgress: true,
      };
    case "getUserRepo":
      return {
        ...state,
        repos: action.payload,
        requestInProgress: false,
      };
    case 'filteredRepo':
        return {
            ...state,
            filteredRepositories: action.payload
        }
    default:
      return state;
  }
};

export default reducers;
