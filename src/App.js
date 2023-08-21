import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import ErrorModal from "./Components/ErrorModal";

function App() {
  const userList = [
    {
      id: 1,
      userName: "Gabriel",
      userAge: 26,
    },
    {
      id: 2,
      userName: "Jessica",
      userAge: 27,
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
    <div>
      <AddUser onAddBtnPress={addUserHandler} />
      <UsersList usersData={userInput} />
      <ErrorModal />
    </div>
  );
}

export default App;
