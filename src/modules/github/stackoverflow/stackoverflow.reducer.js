const initState = {
  downloadedData: [],
  messages: [],
  topic: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "setTopic":
      //console.log(action.payload.topic);
      return { ...state, topic: action.payload.topic };
    case "setData":
      //console.log(action.payload.downloadedData);
      return { ...state, downloadedData: action.payload.downloadedData };
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
