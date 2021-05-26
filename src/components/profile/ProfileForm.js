import styles from "../../css/ProfileForm.module.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const ProfileForm = () => {
  const user = { firstName: "Lorem", lastName: "Ipsum", phoneNumber: "0700000000", email: "admin@mail.com", password: "123456789" }; // Dummy data

  const [firstName, setFirstName] = useState(); // Placeholder data
  const [lastName, setLastName] = useState(""); // Placeholder data
  const [phone, setPhone] = useState(""); // Placeholder data
  const [email, setEmail] = useState(""); // Placeholder data
  const [password, setPassword] = useState(""); // Placeholder data

  //   const [firstNameEdit, setFirstNameEdit] = useState(false);

  // Handlers
  const handleFirstName = () => {};

  const handleLastName = () => {};

  const handlePhone = () => {};

  const handleEmail = () => {};

  const handlePassword = () => {};

  const handleFirstNameEdit = () => {};

  const handleLastNameEdit = () => {};

  const handlePhoneEdit = () => {};

  const handleEmailEdit = () => {};

  const handlePasswordEdit = () => {};

  return (
    <form className={styles.form}>
      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="firstname">
              Förnamn:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="text"
              id="firstname"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="lastname">
              Efternamn:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="text"
              id="lastname"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="phone">
              Telefonnummer:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="tel"
              id="phone"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="email">
              E-post:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="email"
              id="email"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="password">
              Lösenord:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="password"
              id="password"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>
    </form>
  );
};

export default ProfileForm;
