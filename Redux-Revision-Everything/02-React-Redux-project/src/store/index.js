import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    if (action.payload === 4) {
      return {
        counter: state.counter + 4,
      };
    }
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    if (action.payload === 4) {
      return {
        counter: state.counter - 4,
      };
    }
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
