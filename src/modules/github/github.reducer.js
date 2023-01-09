const initState = {
  repos: [],
  messages: [],
  name: "",
  repoName: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "setName":
      console.log(action.payload.name);
      return { ...state, name: action.payload.name };
    case "setRepoName":
      return { ...state, repoName: action.payload.repoName };
    case "setRepos":
      console.log(action.payload.repos);
      return { ...state, repos: action.payload.repos };
    case "setError":
      const { message, type } = action.payload;
      return {
        ...state,
        messages: [...state.messages, { message: message, type: type }],
      };
    default:
      return state;
  }
};
export default reducer;
