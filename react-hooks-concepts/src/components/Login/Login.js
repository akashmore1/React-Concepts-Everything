import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const initialState = {
  enteredEmail: "",
  emailIsValid: false,
  enteredPassword: "",
  passwordIsValid: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_CHANGE":
      return {
        enteredEmail: action.value,
        emailIsValid: action.value.includes("@"),
        enteredPassword: "",
        passwordIsValid: false,
      };

    case "VALIDATE_EMAIL_BLUR":
      return {
        enteredEmail: state.enteredEmail,
        emailIsValid: state.enteredEmail.includes("@"),
        enteredPassword: "",
        passwordIsValid: false,
      };

    case "PASSWORD_CHANGE":
      return {
        enteredEmail: state.enteredEmail,
        emailIsValid: state.enteredEmail.includes("@"),
        enteredPassword: action.value,
        passwordIsValid: action.value.trim().length > 6,
      };

    case "VALIDATE_EMAIL_BLUR":
      return {
        enteredEmail: state.enteredEmail,
        emailIsValid: state.enteredEmail.includes("@"),
        enteredPassword: state.enteredPassword,
        passwordIsValid: state.passwordIsValid,
      };

    default:
      return initialState;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [inputState, dispatchInput] = useReducer(inputReducer, initialState);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("check");
      setFormIsValid(
        inputState.enteredEmail.includes("@") &&
          inputState.enteredPassword.trim().length > 6
      );
    }, 500);

    // useEffect has cleanup function. Just loke componentWillUpdate().
    // return will have a function. It can be annonymous or named. Here I am using annonymous.
    return () => {
      console.log("cleanup");
      // clarTimeout will clear the time by setTimeout.
      clearTimeout(identifier);
    };
  }, [inputState.enteredEmail, inputState.enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchInput({ type: "EMAIL_CHANGE", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchInput({ type: "PASSWORD_CHANGE", value: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(inputState.enteredEmail.includes("@"));
    dispatchInput({ type: "VALIDATE_EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchInput({ type: "VALIDATE_PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(inputState.enteredEmail, inputState.enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            inputState.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={inputState.enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            inputState.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inputState.enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
