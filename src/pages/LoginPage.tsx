import { useEffect, useState } from "react";
import "../App.css";
import AddButton from "../components/AddNew";
import SearchBar from "../components/SearchBar";
import Group from "../components/group/Group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function HandleButton() {
  console.log("NEW COLLECTION PRESSED");
}

function LoginPage() {
  let navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");

  const fetchAPI = async () => {
    try {
      const user = await axios.post("http://localhost:8080/user", {
        username: email,
        password,
      });
      console.log("USER DATA: ", user.data);
      const response = user.data;

      if (response != "ERROR") {
        setLogin(true);
        sessionStorage.setItem("id", user.data.user_id);
        navigate("/home");
      } else {
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchAPI();
  }

  return (
    <div className="LoginPage">
      {!login ? (
        <div className="LoginContainer">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">Your details are incorrect.</p>}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Log In</button>
            <button type="button" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </form>
        </div>
      ) : (
        <div className="LoginContainer">Logging you in...</div>
      )}
    </div>
  );
}

export default LoginPage;
