import types from "./stackOverflow.types";
import {stackOverflowAPI} from './stackOverflow.api'


const apiStack = new stackOverflowAPI();

export const loadDataAction = title => (dispatch, getState) => {

  apiStack.getData(title).then((resp) => {
		dispatch(getResponseAction(resp.items));
    // console.log(resp.items)
	});
  
  }


  export const getTitleAction = value => {
    return {
      type: types.GET_TITLE,
      payload: {
      value,
      },
    };
  };
  

export const getResponseAction = response => {
  return {
    type: types.GET_RESPONSE,
    payload: {
      response,
    },
  };
};
