import initialState from "../store/ui-slice";
import * as actionTypes from "../constants/actionTypes";

const cartReducer = (state = initialState, action) => {
  //   debugger;
  // switch (action.type) {
  //   case actionTypes.CART_CLICKED:
  //     debugger;
  //     return {
  //       cartIsVisible: !state.cartIsVisible,
  //     };
  //   default:
  //     return state;
  // }
  if (action.type === "CART_CLICKED") {
    return {
      cartIsVisible: !state.cartIsVisible,
    };
  }

  return state;
};

export default cartReducer;
