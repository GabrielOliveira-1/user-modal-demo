import React, { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (add data).",
      });
      return;
    }

    if (+inputAge <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }

    if (inputName.trim().length > 0 && inputAge.trim().length > 0) {
      const userInput = {
        id: Math.random().toString(),
        userName: inputName,
        userAge: inputAge,
      };
      props.onAddBtnPress(userInput);
      clearHandler();
    }
  };

  const clearHandler = () => {
    setInputName("");
    setInputAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          <input
            id="username"
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          ></input>

          <label htmlFor="age">User Age</label>
          <input id="age" value={inputAge} onChange={ageChangeHandler}></input>

          <Button onClick={clearHandler}>Clear</Button>
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
