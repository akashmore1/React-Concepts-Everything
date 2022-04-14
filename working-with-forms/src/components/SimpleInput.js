import React, { useState, useRef, useEffect } from "react";
// Learn useRef as well

// In real life, we will only use either useState or useRef. Not both.
// If we need value with every key-stroke then we use useState.
// If we need input value only on submit then useRef is better option.
// if onSubmit we want to clear the input, only option is useState. We can't achieve this using useRef.

const SimpleInput = (props) => {
  // We can provide reference of nameInputRef to <input /> element.
  const nameInputRef = useRef();

  const [inputValue, setInputValue] = useState("");
  // Initially enteredName should be invalid so initial state must be false.
  // This has a problem when user reloads page, by default invalid input error is shown.
  // This a not recommended user experience.
  // We don't need following state, we can implement validation using inputValue and touched value only.
  // enteredNameIsValid = inputValue && eneteredNameTouched  -> /* In this way we can implement */
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  // Because of above issue we will maintain another state =>
  const [eneteredNameTouched, setEnteredNameTouched] = useState(false);

  // Overall form Validity state can be achieved by useEffet.
  /*
   useEffect(() => {
     if(all valid state enetedAgeIsValid e.g enteredAge && enteredName){
       setFormValid(true); -> Manage another state for fornIsValid.

     }else{
       setFormValid(false);
     }
   }, [enteredNameIsValid, enetedAgeIsValid]);

   // We can use formIsValid state to enable and disable submit button.
  */

  const keyStrokeHandler = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (inputValue.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    // This is because browser send http request automatically, when clicked on button.
    // To avoid this default behavior we use preventDefault();
    event.preventDefault();

    // On submit, we are considering all inputs are touched.
    setEnteredNameTouched(true);

    // Let's write first validation. => we cannot submit empty input
    if (inputValue.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(inputValue);

    const enteredValueUsingRef = nameInputRef.current.value;
    console.log("using ref", enteredValueUsingRef);

    // In this way we can clear input using useState.
    setInputValue("");

    // We can clear input using useRef as well.
    // But in below way we are directly manipulating dom, which is not a good practice.
    // nameInputRef.current.value = "";   => THIS IS NOT IDEAL. DON'T MANIPULATE DOM DIRECTLY.
  };

  // We will have one more variable which consider input touched or not:
  const nameInputIsInvalid = !enteredNameIsValid && eneteredNameTouched;

  const formNameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formNameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          // Here is reference to ref
          ref={nameInputRef}
          type="text"
          id="name"
          value={inputValue}
          onChange={keyStrokeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
