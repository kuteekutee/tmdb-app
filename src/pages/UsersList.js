import { useContext } from "react";
import UsersContext from "../contexts/UsersContext";

export const UsersList = () => {
  const {
    users,
    setUsers,
    newUser,
    setNewUser,
    handleAddUser,
    handleInputChange,
    handleKeyPress,
    handleInputChange2,
    checkUserCredentials,
    handleLogout,
    usernameLogin,
    passwordLogin,
    message,
    isLoggedIn,
    currentUser,
    setCurrentUser,
  } = useContext(UsersContext);

  return (
    <>
      <div>
        <h2>List of Users</h2>
        <ul>
          {users &&
            users.map((user) => (
              <li key={user.id}>
                <p>id: {user.id}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
              </li>
            ))}
        </ul>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="username"
            value={newUser?.username || ""}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Username"
          />
          <br></br>
          <input
            type="email"
            name="email"
            value={newUser?.email || ""}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Email"
          />
          <br></br>
          <input
            type="password"
            name="password"
            value={newUser?.password || ""}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Password"
          />
          <br></br>
          {/* Condition to check if the button can be pressed or not */}
          <button
            type="submit"
            disabled={
              !newUser?.username || !newUser?.email || !newUser?.password
            }
          >
            Add User
          </button>
        </form>
        <div>
          <h2>Login</h2>
          <form onSubmit={checkUserCredentials}>
            <input
              type="text"
              name="usernameLogin"
              value={usernameLogin}
              onChange={handleInputChange2}
              placeholder="usernameLogin"
            />
            <input
              type="password"
              name="passwordLogin"
              value={passwordLogin}
              onChange={handleInputChange2}
              placeholder="passwordLogin"
            />
            {/* Condition to check if the button can be pressed or not */}
            <button type="submit" disabled={!usernameLogin || !passwordLogin}>
              Login
            </button>
          </form>
          <p>{message}</p>
          <button onClick={handleLogout} disabled={!isLoggedIn}>
            LOGOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersList;
