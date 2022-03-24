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
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
};

// building store:
// Here we can create store and store it in a variable. e.g. 'store' here.
// We should pass reducer function to createStore();
const store = redux.createStore(counterReducer);

// Now we need action that can be dispatched.
// We have store.getState() function, which is vaialable on store we created, which gives latest state snapshot.
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Now we need to make redux aware of this counterSubscribe() function and tell it we should execute this function whenever there is state change.
// We can do this by reaching out to store and calling subscribe() method on store.
// We will pass counterSubscriber() method to subscribe().
store.subscribe(counterSubscriber);

// If execute above code without any action, we will get an error.
// 'TypeError: Cannot read properties of undefined (reading 'counter')'
// This is expected error as we incremented counter in state, but state is undefined.
// So we will give state a default value, or initialize it.
// Intiallizing state(at line 13) will resolve error but it will not give any output because we have not dispatched any action yet.
// we can get initial state by this:
console.log(store.getState());

// For dispatching action we have another method on store.
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
