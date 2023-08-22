import React, { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const submitHandler = (e) => {
    const userInput = {
      userName: inputName,
      userAge: inputAge,
    };
    props.onAddBtnPress(userInput);
    clearHandler();
  };

  const clearHandler = () => {
    setInputName("");
    setInputAge("");
  };

  // inputName.trim().length && inputAge.trim().length > 0
  //   ? setIsValid(true)
  //   : setIsValid(false);

  // if (inputName.trim().length && inputAge.trim().length > 0) {
  //   setIsValid(true);
  // } else {
  //   setIsValid(false);
  // }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          className={`${!isValid && classes.invalid}`}
          id="username"
          type="text"
          value={inputName}
          onChange={nameChangeHandler}
        ></input>

        <label htmlFor="age">User Age</label>
        <input
          className={`${!isValid && classes.invalid}`}
          id="age"
          value={inputAge}
          onChange={ageChangeHandler}
        ></input>

        <Button onClick={clearHandler}>Clear</Button>
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default AddUser;
