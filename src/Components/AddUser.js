import React, { useState } from "react";
import classes from "./AddUser.module.css";

import Card from "./UI/Card";

const AddUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setInputAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
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

  return (
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

        <button onClick={clearHandler}>Clear</button>
        <button type="submit">Add</button>
      </form>
    </Card>
  );
};

export default AddUser;
