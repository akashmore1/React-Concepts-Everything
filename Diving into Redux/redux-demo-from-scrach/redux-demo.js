// We will run this file with node, so import will look different.
// Here imported redux is an object.
const redux = require("redux");

// Now for redux we will need to create store, a reducer function and an action.

// Creating reducer:
// A reducer function will always have two parameters, 1. current state, 2. action
// Redux has similarities with useReducer hook.
// A reducer function should be pure function, it should not have http request,
// And there should not be any side effects in this function.
// We should not write anything to localstorage or fetch anything from localstorage in reducer function.
const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

// building store:
// Here we can create store and store it in a variable. e.g. 'store' here.
// We should pass reducer function to createStore();
const store = redux.createStore(counterReducer);

// Now we need action that can be dispatched.
// We have store.getState() function, which is vaialable on store we created, which gives latest state snapshot.
const counterSunscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
