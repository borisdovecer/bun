import { useState } from "react";
import { loginUser } from "@app/services/auth.ts";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@app/store/hooks.ts";
import { AppDispatch } from "@app/store";
import { setUser } from "@app/store/userSlice.ts";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history: NavigateFunction = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      dispatch(setUser({ username: response.username, role: response.role }));
      localStorage.token = response.token;
      history("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
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

export default Login;
