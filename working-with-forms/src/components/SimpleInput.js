import React, { useState, useRef } from "react";
// Learn useRef as well

// In real life, we will only use either useState or useRef. Not both.
// If we need value with every key-stroke then we use useState.
// If we need input value only on submit then useRef is better option.
// if onSubmit we want to clear the input, only option is useState. We can't achieve this using useRef.

const SimpleInput = (props) => {
  // We can provide reference of nameInputRef to <input /> element.
  const nameInputRef = useRef();

  const [inputValue, setInputValue] = useState("");

  const keyStrokeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const formSubmissionHandler = (event) => {
    // This is because browser send http request automatically, when clicked on button.
    // To avoid this default behavior we use preventDefault();
    event.preventDefault();
    console.log(inputValue);

    const enteredValueUsingRef = nameInputRef.current.value;
    console.log("using ref", enteredValueUsingRef);

    // In this way we can clear input using useState.
    setInputValue("");

    // We can clear input using useRef as well.
    // But in below way we are directly manipulating dom, which is not a good practice.
    // nameInputRef.current.value = "";   => THIS IS NOT IDEAL. DON'T MANIPULATE DOM DIRECTLY.
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          // Here is reference to ref
          ref={nameInputRef}
          type="text"
          id="name"
          value={inputValue}
          onChange={keyStrokeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
