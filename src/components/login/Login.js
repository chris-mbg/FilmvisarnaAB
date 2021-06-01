import style from "../../css/Login.module.css";
import React, { useState, useContext } from "react";
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter,
  useHistory,
} from "react-router-dom";
import { UserContext } from "../../contexts/UserContext"; //?

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Context
  const { login } = useContext(UserContext);

  // useHistory
  const history = useHistory();

  // Handlers
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("password:", password);

    login({ email, password });

    // console.log("login successful");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`form-group ${style.modalContainer}`}>
      <h2 className={style.loginHeading}>Logga in</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          className={`form-control ${style.input}`}
          value={email}
          onChange={handleEmail}
          name="email"
          id="email"
          placeholder="E-postadress"
          autoComplete="off"
        />
        <input
          type="password"
          className={`form-control ${style.input}`}
          value={password}
          onChange={handlePassword}
          name="password"
          id="password"
          placeholder="Lösenord"
          autoComplete="off"
        />

        <button className={`btn ${style.loginBtn}`}>Logga in</button>
      </form>

      <p className={style.regText}>
        <NavLink to="/registration" className={`${style.linkStyle}`}>
          Inte medlem än? Registrera dig här.
        </NavLink>
      </p>
    </div>
  );
};
export default Login;
