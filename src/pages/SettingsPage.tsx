import { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface User {
  user_id: number;
  username: string;
  password: string;
}

function SettingsPage() {
  let navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [pass1, setpass1] = useState<string>("");
  const [pass2, setpass2] = useState<string>("");
  const [error, setError] = useState(false);
  const [pass, setPass] = useState(false);
  const fetchAPI = async () => {
    const user_id = sessionStorage.getItem("id");
    const USER = await axios.get("http://localhost:8080/user/" + user_id);
    setUser(USER.data);
  };

  function handleLogout() {
    sessionStorage.clear();
    navigate("/login");
  }

  const deleteUser = async () => {
    const response = await axios.post(
      "http://localhost:8080/deleteuser/" + user?.user_id
    );
    console.log(response);
    navigate("/login");
  };

  const saveUser = async () => {
    const response = await axios.post("http://localhost:8080/user", {
      id: user?.user_id,
      username: user?.username,
      password: user?.password,
    });
    console.log(response);
  };

  fetchAPI();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(pass1, " ", pass2);
    e.preventDefault();
    if (pass1 == pass2 && pass1?.length > 0) {
      console.log("PASS");
      setError(false);
      saveUser();
      setPass(true);
    } else {
      console.log("FAIL");
      setError(true);
    }
  };

  return (
    <div className="SettingsPage">
      <div className="TopBar">
        <h2>Settings</h2>
        <div className="RightSide">
          <div />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {pass && <label>Details saved.</label>}
        <label>Email</label>
        <input type="email" defaultValue={user?.username}></input>
        {error && <label>Passwords do not match. Try again</label>}
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setpass1(e.target.value)}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={(e) => setpass2(e.target.value)}
        ></input>
        <div>
          <button>Save</button>
          <button className="deleteacc" type="button" onClick={deleteUser}>
            Delete Account
          </button>
          <button className="logout" onClick={handleLogout} type="button">
            Log Out
          </button>
        </div>
      </form>
    </div>
  );
}

export default SettingsPage;
