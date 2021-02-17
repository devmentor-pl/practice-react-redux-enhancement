import types from "./stackOverflow.types";
import {stackOverflowAPI} from './stackOverflow.api'


const apiStack = new stackOverflowAPI();

export const loadDataAction = (user) => (dispatch, getState) => {

  apiStack.getData(user).then((resp) => {
		dispatch(getResponseAction(resp));
    console.log(resp.items)
	});
  
  }


  export const getUserAction = value => {
    return {
      type: types.GET_USER,
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
