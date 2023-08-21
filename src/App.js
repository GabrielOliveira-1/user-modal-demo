import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import UsersList from "./Components/UsersList";
import ErrorModal from "./Components/ErrorModal";

function App() {
  const userList = [
    {
      userName: "Gabriel",
      userAge: 26,
    },
    {
      userName: "Jessica",
      userAge: 27,
    },
    {
      userName: "Test334",
      userAge: "180",
    },
  ];

  const [userInput, setUserInput] = useState(userList);

  const addUserHandler = (userInput) => {
    setUserInput(userInput);
  };
  console.log(userInput);

  return (
    <div>
      <AddUser onAddBtnPress={addUserHandler} />
      <UsersList />
      <ErrorModal />
    </div>
  );
}

export default App;
