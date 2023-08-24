import React, { useState, useRef } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (add data).",
      });
      return;
    }

    if (+enteredAge <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }

    if (enteredName.trim().length > 0 && enteredAge.trim().length > 0) {
      const userInput = {
        id: Math.random().toString(),
        userName: enteredName,
        userAge: enteredAge,
      };
      props.onAddBtnPress(userInput);
      clearHandler();
    }
  };

  const clearHandler = () => {
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameInputRef}></input>

          <label htmlFor="age">User Age</label>
          <input id="age" type="number" ref={ageInputRef}></input>

          <Button onClick={clearHandler}>Clear</Button>
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
