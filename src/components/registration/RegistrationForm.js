import styles from "../../css/RegistrationForm.module.css";
import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Alert } from "react-bootstrap";
import { checkPassword } from "../../utilities/utilities";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);

  // Context
  const { register } = useContext(UserContext);

  // useHistory
  const history = useHistory();

  // Handlers

  const handleRegister = (e) => {
    e.preventDefault();

    if (checkPassword(password)) {
      register({ firstName, lastName, phone, email, password }).then((data) => {
        if (data) {
          // Registration - logs user in after registration is completed.

          // Resets form
          setFirstName("");
          setLastName("");
          setPhone("");
          setEmail("");
          setPassword("");

          // Reset alerts
          setAlertPassword(false);
          setAlertEmail(false);

          // Re-directs to:
          history.push("/");
        }
        if (!data) {
          setAlertEmail(true);
        }
      });
    }

    if (!checkPassword(password)) {
      setAlertPassword(true);
    }
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

  // Alert boxes
  const alertPasswordBox = alertPassword ? (
    <Alert variant="dark" onClose={() => setAlertPassword(false)} dismissible>
      <p>
        Försök igen! <br />
        Ditt lösenord måste innehålla minst 8 tecken, varav en stor bokstav, en
        siffra, ett specialtecken.
      </p>
    </Alert>
  ) : (
    ""
  );

  const alertEmailBox = alertEmail ? (
    <Alert variant="dark" onClose={() => setAlertEmail(false)} dismissible>
      <p>Välj en annan e-post!</p>
    </Alert>
  ) : (
    ""
  );

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

        {alertPasswordBox}
        {alertEmailBox}

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
