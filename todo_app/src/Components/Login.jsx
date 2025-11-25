import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api/users/";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(`${API_URL}login/`, { username, password });
      localStorage.setItem("access", res.data.access);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <br/><br/>
      <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <br/><br/>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login;
