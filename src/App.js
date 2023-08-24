import React, { Fragment, useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";

function App() {
  const userList = [
    {
      id: 1,
      userName: "Gabriel",
      userAge: 26,
    },
    {
      id: 2,
      userName: "Test667",
      userAge: 250,
    },
    {
      id: 3,
      userName: "Test334",
      userAge: "180",
    },
  ];

  const [userInput, setUserInput] = useState(userList);

  const addUserHandler = (userInput) => {
    setUserInput((prevInput) => {
      return [userInput, ...prevInput];
    });
  };

  return (
    <Fragment>
      <AddUser onAddBtnPress={addUserHandler} />
      <UsersList usersData={userInput} />
    </Fragment>
  );
}

export default App;
