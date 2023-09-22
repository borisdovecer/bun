import { useState } from "react";
import { registerUser } from "@app/services/auth.ts";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history: NavigateFunction = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await registerUser(username, password);
      history("/login");
    } catch (err) {
      setError("dude... wtf");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
