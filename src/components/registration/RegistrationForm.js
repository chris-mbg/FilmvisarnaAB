import styles from "../../css/RegistrationForm.module.css";
import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { checkPassword } from "../../utilities/utilities";
import RegistrationAlertBoxes from "./RegistrationAlertBoxes";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertConfirmPassword, setAlertConfirmPassword] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);

  // Context
  const { register, setShowLogin } = useContext(UserContext);

  // useHistory
  const history = useHistory();

  // Props
  const alerts = {
    alertPassword,
    alertConfirmPassword,
    alertEmail,
    setAlertPassword,
    setAlertConfirmPassword,
    setAlertEmail,
  };

  // Handlers
  const handleRegister = (e) => {
    e.preventDefault();

    // If both password and confirmPassword is valid and matches with each other ...
    if (checkPassword(password) && confirmPassword.includes(password)) {
      register({ firstName, lastName, phone, email, password }).then((data) => {
        if (data === true) {
          // Resets form
          setFirstName("");
          setLastName("");
          setPhone("");
          setEmail("");
          setPassword("");

          // Reset alerts
          setAlertPassword(false);
          setAlertConfirmPassword(false);
          setAlertEmail(false);

          // Re-directs to:
          history.push("/");
        }

        // If status code is 409(Conflict) - meaning e-mail already exists in database. Set alert for e-mail to: "true".
        if (data.status === 409) {
          setAlertEmail(true);

          return;
        }
      });
    }

    // If password does NOT fulfills following requirements:
    // 8 characters, at least one uppercase letter, at least one lowercase letter, one number and one special character.
    // set alertPassword to: true.
    if (!checkPassword(password)) {
      setAlertPassword(true);

      return;
    }

    // If password and confirmPassword does NOT matches with each other, set "alertConfirmPassword" to true.
    if (
      !password.includes(confirmPassword) ||
      !confirmPassword.includes(password)
    ) {
      setAlertConfirmPassword(true);

      return;
    }
  };

  const handlePhone = (e) => {
    // Only allows numbers - input
    const checkNumber = /^[0-9]*$/g;

    if (checkNumber.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  return (
    <div className={`${styles.form_container} `}>
      <h2 className={styles.title}>Registrering</h2>

      <form onSubmit={(e) => handleRegister(e)} className={`${styles.form}`}>
        <div className="form-group">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setLastName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
            className={`${styles.input} form-control`}
            type="password"
            id="password"
            placeholder="Lösenord"
          />
        </div>

        <div className="form-group">
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
            required
            className={`${styles.input} form-control`}
            type="password"
            id="confirmpassword"
            placeholder="Bekräfta lösenord"
          />
        </div>

        <RegistrationAlertBoxes alerts={alerts} />

        <div className="d-flex justify-content-center">
          <button type="submit" className={`${styles.button} btn`}>
            Registrera
          </button>
        </div>

        <p className={styles.cta}>
          Medlem?{" "}
          <NavLink
            className={styles.login_link}
            exact
            to="#"
            onClick={() => setShowLogin(true)}
          >
            Logga in här
          </NavLink>
        </p>
        <hr className={styles.hr} />
      </form>
    </div>
  );
};

export default RegistrationForm;
