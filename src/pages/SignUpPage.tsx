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

interface User {
  user_id: number;
  username: string;
  password: string;
}

function SignUpPage() {
  let navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const saveUser = async () => {
    try {
      const response = await axios.post("http://localhost:8080/users", {
        username: email,
        password: password1,
        user_type: "user",
        salt: "",
      });

      const user = await axios.post("http://localhost:8080/user", {
        username: email,
        password: password1,
      });
      console.log("USER DATA: ", user.data);

      console.log(user);
      sessionStorage.setItem("id", user.data.user_id);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(password1, " ", password2);
    if (password1 == password2 && password1?.length > 0) {
      console.log("PASS");
      setError(false);
      saveUser();
      setLogin(true);
    } else {
      console.log("FAIL");
      setError(true);
    }
  }

  return (
    <div className="SignUpPage">
      {!login ? (
        <div className="LoginContainer">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">Password does not pass.</p>}
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
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => navigate("/login")}>
              Back to Sign In
            </button>
          </form>
        </div>
      ) : (
        <div className="LoginContainer">Logging you in...</div>
      )}
    </div>
  );
}

export default SignUpPage;
