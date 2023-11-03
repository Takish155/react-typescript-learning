import { useEffect, useState } from "react";
import "./App.css";
import apiClient, { CanceledError, AxiosError } from "./services/api-clients";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Sets the loading to true
    setLoading(true);
    // Creates a controler for aborting calls
    const control = new AbortController();
    const fetchUsers = async () => {
      try {
        // Sends request
        const response = await apiClient.get<User[]>("/users", {
          signal: control.signal,
        });
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        // Checks if the error isn't a abort
        if (err instanceof CanceledError) return;
        // Sets the error
        setError((err as AxiosError).message);
        setLoading(false);
      }
    };
    fetchUsers();

    // Clean up effect method with abort
    return () => control.abort();
  }, []);

  // Delete method
  const deleteUser = (user: User) => {
    // Creates a shallow coppy of users
    const originalUsers = [...users];
    // Filters the users
    setUsers(users.filter((ele) => ele.id !== user.id));

    // Calls a request
    apiClient
      .delete(`/users/${user.id}`)
      // if Error
      .catch((err) => {
        // Sets the error
        setError((err as AxiosError).message);
        // Sets the user back to its original
        setUsers(originalUsers);
      });
  };

  // Add Method
  const addUser = () => {
    // Data of the new user
    const newUser = { name: "Takeshi", id: 0, email: "idk@wad.cawd" };
    // Creates a shallow copy of users
    const originalUsers = [...users];
    // Adds the new user
    setUsers([newUser, ...users]);

    apiClient
      // Sends a post request
      .post(`/users/`, newUser)
      // Adds the newUser data into the users data
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError((err as AxiosError).message);
        setUsers(originalUsers);
      });
  };

  // Updated Method
  const updateUser = (user: User) => {
    // Creates a shallow copy of users
    const originalUsers = [...users];
    // Data of updated user
    const updatedUser = { ...user, name: user.name + "!" };
    // Sets the user to have !
    setUsers(users.map((ele) => (user.id === ele.id ? updatedUser : ele)));

    // Sends a update request
    apiClient.patch(`/users/${user.id}`).catch((err) => {
      setError((err as AxiosError).message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <h1>Hello world</h1>
      {loading ? <p>Loading...</p> : ""}
      {error && <p className=" text-red-700">{error}</p>}
      {users?.map((ele) => {
        return (
          <div key={ele.id}>
            <p>
              {ele.name} | {ele.email}
            </p>
            <button onClick={() => deleteUser(ele)}>Remove</button>
            <button onClick={addUser}>Add</button>
            <button onClick={() => updateUser(ele)}>Update</button>
          </div>
        );
      })}
    </>
  );
}

export default App;
