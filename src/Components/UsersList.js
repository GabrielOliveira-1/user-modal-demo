import React from "react";
import classes from "./UsersList.module.css";
import Card from "./UI/Card";

const UsersList = (props) => {
  if (props.usersData.length === 0) {
    return <p>No users found.</p>;
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.usersData.map((user) => (
          <li key={user.id}>
            {user.userName} is {user.userAge} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
