import "./AddUser.css";

const AddUser = () => {
  return (
    <form>
      <label htmlFor="username">User Name</label>
      <input id="username" type="text"></input>

      <label htmlFor="age">User Age</label>
      <input id="age"></input>

      <button>Clear</button>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
