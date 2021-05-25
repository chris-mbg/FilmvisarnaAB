import styles from "../../css/RegistrationForm.module.css";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { checkPassword } from "../../utilities/utilities";

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
          <input
            value={firstName}
            onChange={(e) => handleFirstName(e)}
            autoComplete="off"
            required
            className={`${styles.input} form-control`}
            type="text"
            id="firstname"
            placeholder="Förnamn"
          />
        </div>

        <div className="form-group">
          <input
            value={lastName}
            onChange={(e) => handleLastName(e)}
            autoComplete="off"
            required
            className={`${styles.input} form-control`}
            type="text"
            id="lastname"
            placeholder="Efternamn"
          />
        </div>

        <div className="form-group">
          <input
            value={phone}
            onChange={(e) => handlePhone(e)}
            autoComplete="off"
            required
            className={`${styles.input} form-control`}
            type="tel"
            id="phone"
            placeholder="Telefonnummer"
          />
        </div>

        <div className="form-group">
          <input
            value={email}
            onChange={(e) => handleEmail(e)}
            autoComplete="off"
            required
            className={`${styles.input} form-control`}
            type="email"
            id="email"
            placeholder="E-post"
          />
        </div>

        <div className="form-group">
          <input
            value={password}
            onChange={(e) => handlePassword(e)}
            autoComplete="off"
            required
            className={`${styles.input} form-control`}
            type="password"
            id="password"
            placeholder="Lösenord"
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
