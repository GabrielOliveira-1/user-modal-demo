import "./UsersList.css";

const UsersList = (props) => {
  if (props.usersData.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {props.usersData.map((user) => (
        <>
          <li>Name: {user.userName}</li>
          <li>
            Age: {user.userName} is {user.userAge} years old.
          </li>
        </>
      ))}
    </ul>
  );
};

export default UsersList;
