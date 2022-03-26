import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

// For correctly implementing Redux, in reducer function for each dispatched action, we should always return new object.
// We should return all state in object each time.
// e.g. showCounter state is not useful in "INCREMENT" or "DECREMENT" action, still we must specify them.
const toggleCounterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: true,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      showCounter: true,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: true,
    };
  }

  if (action.type === "HIDE_COUNTER") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(toggleCounterReducer);

export default store;
