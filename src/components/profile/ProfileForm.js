import styles from "../../css/ProfileForm.module.css";
import { useContext, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import { checkEmail, checkPassword } from "../../utilities/utilities";
import ProfileFormAlertBoxes from "./ProfileFormAlertBoxes";

const ProfileForm = () => {
  // Context
  const { loggedInUser, userUpdate } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [editInput, setEditInput] = useState({
    firstNameDisabled: true,
    lastNameDisabled: true,
    phoneDisabled: true,
    emailDisabled: true,
    passwordDisabled: true,
  });

  const [alertConfirm, setAlertConfirm] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertConfirmPassword, setAlertConfirmPassword] = useState(false);
  const [alertEmailExists, setAlertEmailExists] = useState(false);
  const [alertEmailInvalid, setAlertEmailInvalid] = useState(false);

  // Props
  const alerts = {
    alertConfirm,
    setAlertConfirm,
    alertPassword,
    setAlertPassword,
    alertConfirmPassword,
    setAlertConfirmPassword,
    alertEmailExists,
    setAlertEmailExists,
    alertEmailInvalid,
    setAlertEmailInvalid,
  };

  useEffect(() => {
    setFirstName(loggedInUser?.firstName);
    setLastName(loggedInUser?.lastName);
    setPhone(loggedInUser?.phoneNumber);
    setEmail(loggedInUser?.email);
  }, [loggedInUser]);

  const handlePhone = (e) => {
    // Only allows numbers - input
    const checkNumber = /^[0-9]*$/g;

    if (checkNumber.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  // Common handler for all input fields (start edit icon)
  const handleEditInput = (e, input) => {
    // Resets all alerts when user toggles a new input field.
    setAlertConfirm(false);
    setAlertPassword(false);
    setAlertConfirmPassword(false);
    setAlertEmailExists(false);
    setAlertEmailInvalid(false);

    // Using spread syntax to create a copy of state variable and also avoiding "reference" to original state variable.
    let newObject = { ...editInput };

    // Sets keys to false, except for "key === input"
    Object.keys(newObject).forEach((key) => {
      if (key === input) {
        return (newObject[key] = false);
      } else {
        return (newObject[key] = true);
      }
    });

    // Set state variable to newObject
    setEditInput(newObject);
  };

  // Handlers - confirm edit

  const handleFirstNameConfirmEdit = () => {
    userUpdate({ firstName: firstName }).then((data) => {
      // If update was successful then show confirmation alert/message.
      if (data === true) {
        setAlertConfirm(true);
        setEditInput({ ...editInput, firstNameDisabled: true });

        return;
      }
    });
  };

  const handleLastNameConfirmEdit = () => {
    userUpdate({ lastName: lastName }).then((data) => {
      if (data === true) {
        // If update was successful then show confirmation alert/message and disable specific input field.
        setAlertConfirm(true);
        setEditInput({ ...editInput, lastNameDisabled: true });

        return;
      }
    });
  };

  const handlePhoneConfirmEdit = () => {
    userUpdate({ phoneNumber: phone }).then((data) => {
      if (data === true) {
        // If update was successful then show confirmation alert/message and disable specific input field.
        setAlertConfirm(true);
        setEditInput({ ...editInput, phoneDisabled: true });

        return;
      }
    });
  };

  const handlePasswordConfirmEdit = () => {
    // If both password and confirmPassword is valid and matches with each other ...
    if (checkPassword(password) && confirmPassword.includes(password)) {
      userUpdate({ password: password }).then((data) => {
        // If updating user's email was successful then show confirmation alert/message and disable inputfield for: password, confirmPassword.
        if (data === true) {
          setAlertConfirm(true);
          setEditInput({ ...editInput, passwordDisabled: true });

          // Reset password fields
          setPassword("");
          setConfirmPassword("");

          return;
        }
      });
    }
    if (!checkPassword(password)) {
      // If password does NOT fulfills following requirements:
      // 8 characters, at least one uppercase letter, at least one lowercase letter, one number and one special character.
      // set alertPassword to: true.
      setAlertPassword(true);

      return;
    }

    // If password and confirmPassword does NOT matches with each other, set "alertConfirmPassword" to true and disable specific input field.
    if (
      !password.includes(confirmPassword) ||
      !confirmPassword.includes(password)
    ) {
      setAlertConfirmPassword(true);

      return;
    }
  };

  const handleEmailEdit = () => {
    // If e-mail is invalid then set alertEmailInvalid to: true.
    if (!checkEmail(email)) {
      setAlertEmailInvalid(true);

      return;
    } else {
      // If e-mail is valid then proceed...
      userUpdate({ email: email }).then((data) => {
        // If updating user's email was successful then show confirmation alert/message and disable specific input field.
        if (data === true) {
          setAlertConfirm(true);
          setEditInput({ ...editInput, emailDisabled: true });

          return;
        }
        // If e-mail already exists in database then set alertEmailExists to: "true"
        if (data.status === 409) {
          setAlertEmailExists(true);

          return;
        }
      });
    }
  };

  return (
    <form className={styles.form}>
      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="firstname">
              Förnamn:
            </label>

            <input
              style={{ opacity: editInput.firstNameDisabled && "0.45" }}
              disabled={editInput.firstNameDisabled}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
          md={2}
          lg={1}
        >
          {editInput.firstNameDisabled ? (
            <i
              onClick={(e) => handleEditInput(e, "firstNameDisabled")}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <>
              <i
                onClick={handleFirstNameConfirmEdit}
                className={`${styles.icon} fas fa-check pl-3`}
              ></i>
              <i
                onClick={() => {
                  setEditInput({ ...editInput, firstNameDisabled: true });
                  setFirstName(loggedInUser.firstName);
                }}
                className={`${styles.icon} fas fa-times pl-2`}
              ></i>
            </>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="lastname">
              Efternamn:
            </label>

            <input
              style={{ opacity: editInput.lastNameDisabled && "0.45" }}
              disabled={editInput.lastNameDisabled}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
          md={2}
          lg={1}
        >
          {editInput.lastNameDisabled ? (
            <i
              onClick={(e) => handleEditInput(e, "lastNameDisabled")}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <>
              <i
                onClick={handleLastNameConfirmEdit}
                className={`${styles.icon} fas fa-check pl-3`}
              ></i>
              <i
                onClick={() => {
                  setEditInput({ ...editInput, lastNameDisabled: true });
                  setLastName(loggedInUser.lastName);
                }}
                className={`${styles.icon} fas fa-times pl-2`}
              ></i>
            </>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="phone">
              Telefonnummer:
            </label>

            <input
              style={{ opacity: editInput.phoneDisabled && "0.45" }}
              disabled={editInput.phoneDisabled}
              value={phone}
              onChange={(e) => handlePhone(e)}
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
          md={2}
          lg={1}
        >
          {editInput.phoneDisabled ? (
            <i
              onClick={(e) => handleEditInput(e, "phoneDisabled")}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <>
              <i
                onClick={handlePhoneConfirmEdit}
                className={`${styles.icon} fas fa-check pl-3`}
              ></i>
              <i
                onClick={() => {
                  setEditInput({ ...editInput, phoneDisabled: true });
                  setPhone(loggedInUser.phone);
                }}
                className={`${styles.icon} fas fa-times pl-2`}
              ></i>
            </>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="email">
              E-post:
            </label>

            <input
              style={{ opacity: editInput.emailDisabled && "0.45" }}
              disabled={editInput.emailDisabled}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          md={2}
          lg={1}
        >
          {editInput.emailDisabled ? (
            <i
              onClick={(e) => handleEditInput(e, "emailDisabled")}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <>
              <i
                onClick={handleEmailEdit}
                className={`${styles.icon} fas fa-check pl-3`}
              ></i>
              <i
                onClick={() => {
                  setEditInput({ ...editInput, emailDisabled: true });
                  setEmail(loggedInUser.email);
                  setAlertEmailExists(false);
                  setAlertEmailInvalid(false);
                }}
                className={`${styles.icon} fas fa-times pl-2`}
              ></i>
            </>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="password">
              Nytt lösenord:
            </label>

            <input
              style={{ opacity: editInput.passwordDisabled && "0.45" }}
              disabled={editInput.passwordDisabled}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          md={2}
          lg={1}
        >
          {editInput.passwordDisabled ? (
            <i
              onClick={(e) => handleEditInput(e, "passwordDisabled")}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <>
              <i
                onClick={handlePasswordConfirmEdit}
                className={`${styles.icon} fas fa-check pl-3`}
              ></i>
              <i
                onClick={() => {
                  setEditInput({ ...editInput, passwordDisabled: true });
                  setPassword("");
                  setConfirmPassword("");
                  setAlertPassword(false);
                  setAlertConfirmPassword(false);
                }}
                className={`${styles.icon} fas fa-times pl-2`}
              ></i>
            </>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="password">
              Bekräfta nytt lösenord:
            </label>

            <input
              style={{ opacity: editInput.passwordDisabled && "0.45" }}
              disabled={editInput.passwordDisabled}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="password"
              id="confirmpassword"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={2}
          lg={1}
        ></Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <ProfileFormAlertBoxes alerts={alerts} />
          {/* Alert boxes */}
        </Col>
      </Row>
    </form>
  );
};

export default ProfileForm;
