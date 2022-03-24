import classes from "./Counter.module.css";

// In this component we need to connect to store of redux, we can do that using:
import { useSelector, useDispatch } from "react-redux";

// useSelector lets us use a part of state we stored in store.
// We can also use useStore hook to access store.

const Counter = () => {
  // useSelector will get callback function, which takes state in store as a parameter.
  // The we return part of the state which we want to return.
  // This part of state can be stored in a variable.
  const counter = useSelector((state) => state.counter);
  console.log(counter);

  // For dispatching actions we use useDispatch hook.
  // useDispatch() does not take any argument, it return a function, which we can use just like we used in useReducer()
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const increaseHandler = () => {
    // Here amount is payload to action.
    dispatch({ type: "INCREASE", amount: 4 });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "HIDE_COUNTER" });
  };

  const isCounterVisible = useSelector((state) => {
    return state.showCounter;
  });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 4</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
