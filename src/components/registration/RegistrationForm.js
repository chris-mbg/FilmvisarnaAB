import styles from "../../css/RegistrationForm.module.css";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const RegistrationForm = () => {
  return (
    <div className={`${styles.form_container} `}>
      <h2 className={styles.title}>Registrering</h2>

      <form className={`${styles.form}`}>
        <div className="form-group">
          <label className="pl-2" htmlFor="firstname">
            Förnamn:
          </label>
          <input
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
