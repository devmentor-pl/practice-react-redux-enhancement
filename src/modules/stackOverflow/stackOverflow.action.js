import types from "./stackOverflow.types";
import {stackOverflowAPI} from './stackOverflow.api'


const apiStack = new stackOverflowAPI();

export const loadDataAction = (title) => (dispatch, getState) => {
  const state = getState();
  apiStack.getData(state.stackoverflow.title).then((resp) => {
		dispatch(setResponseAction(resp.items));
    // console.log(resp.items)
	});
  
  }


  export const getTitleAction = title => {
    return {
      type: types.GET_TITLE,
      payload: {
      title,
      },
    };
  };
  

export const setResponseAction = response => {
  return {
    type: types.SET_RESPONSE,
    payload: {
      response,
    },
  };
};
