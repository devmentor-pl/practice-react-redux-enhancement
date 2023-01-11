import types from "./stackoverflow.types";

const initState = {
  downloadedData: [],
  messages: [],
  topic: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_TOPIC:
      //console.log(action.payload.topic);
      return { ...state, topic: action.payload.topic };
    case types.SET_DATA:
      //console.log(action.payload.downloadedData);
      return { ...state, downloadedData: action.payload.downloadedData.items };
    case types.SORT_DATA:
      console.log("kot w reduc");
      function sortNum(a, b) {
        if (action.payload.sortingKey === "creation_date") {
          return a.creation_date - b.creation_date;
        } else {
          return a.owner.reputation - b.owner.reputation;
        }
      }
      return {
        ...state,
        downloadedData: state.downloadedData.sort(sortNum),
      };
    case types.SET_ERROR:
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
