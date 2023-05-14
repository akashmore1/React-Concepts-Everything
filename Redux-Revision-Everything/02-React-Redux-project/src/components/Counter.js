import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const counterValue = useSelector((state) => {
    return state.counter;
  });
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "increment", payload: 4 });
          }}
        >
          Increment by 4
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement", payload: 4 });
          }}
        >
          Decrement by 4
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
