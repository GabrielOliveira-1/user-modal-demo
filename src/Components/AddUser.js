import React, { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

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
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) return;
    if (+inputAge <= 0) return;

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

  return (
    <div>
      <ErrorModal title="Error ocurred" message="something wrong" />
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
