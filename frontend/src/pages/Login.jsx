import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api-auth/login/", {
        username,
        password,
      });

      nav("/todo");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
}

export default Login;

