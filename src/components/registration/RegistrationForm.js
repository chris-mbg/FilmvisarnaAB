import styles from "../../css/RegistrationForm.module.css";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handlers

  const handleRegister = (e) => {
    e.preventDefault();
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`${styles.form_container} `}>
      <h2 className={styles.title}>Registrering</h2>

      <form onSubmit={(e) => handleRegister(e)} className={`${styles.form}`}>
        <div className="form-group">
          <label className="pl-2" htmlFor="firstname">
            Förnamn:
          </label>
          <input
            value={firstName}
            onChange={(e) => handleFirstName(e)}
            autoComplete="off"
            required
            className="form-control"
            type="text"
            id="firstname"
          />
        </div>

        <div className="form-group">
          <label className="pl-2" htmlFor="lastname">
            Efternamn:
          </label>
          <input
            value={lastName}
            onChange={(e) => handleLastName(e)}
            autoComplete="off"
            required
            className="form-control"
            type="text"
            id="lastname"
          />
        </div>

        <div className="form-group">
          <label className="pl-2" htmlFor="phone">
            Telefonnummer:
          </label>
          <input
            value={phone}
            onChange={(e) => handlePhone(e)}
            autoComplete="off"
            required
            className="form-control"
            type="tel"
            id="phone"
          />
        </div>

        <div className="form-group">
          <label className="pl-2" htmlFor="email">
            Epost:
          </label>
          <input
            value={email}
            onChange={(e) => handleEmail(e)}
            autoComplete="off"
            required
            className="form-control"
            type="email"
            id="email"
          />
        </div>

        <div className="form-group">
          <label className="pl-2" htmlFor="password">
            Lösenord:
          </label>
          <input
            value={password}
            onChange={(e) => handlePassword(e)}
            autoComplete="off"
            required
            className="form-control"
            type="password"
            id="password"
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className={`${styles.button} btn`}>
            Registrera
          </button>
        </div>

        <p className={styles.cta}>
          Medlem?{" "}
          <NavLink className={styles.login_link} exact to="#">
            Logga in här
          </NavLink>
        </p>
        <hr className={styles.hr} />
      </form>
    </div>
  );
};

export default RegistrationForm;
