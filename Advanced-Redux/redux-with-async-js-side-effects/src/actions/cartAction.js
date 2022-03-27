import createAction from "./createAction";
import * as actionTypes from "../constants/actionTypes";

const cartClickHandler = () => {
  return (dispatch) => {
    dispatch(createAction(actionTypes.CART_CLICKED));
  };
};

export default cartClickHandler;
