import styles from "../../css/ProfileForm.module.css";
import { useContext, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import { checkEmail, checkPassword } from "../../utilities/utilities";
import ProfileFormAlertBoxes from "./ProfileFormAlertBoxes";
import ProfileFormInputFields from "./ProfileFormInputFields";

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

  const [alertEmptyInput, setAlertEmptyInput] = useState(false);
  const [alertConfirm, setAlertConfirm] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertConfirmPassword, setAlertConfirmPassword] = useState(false);
  const [alertEmailExists, setAlertEmailExists] = useState(false);
  const [alertEmailInvalid, setAlertEmailInvalid] = useState(false);

  useEffect(() => {
    setDefaultUserInformation();
  }, [loggedInUser]);

  // Function which sets default user information
  const setDefaultUserInformation = () => {
    setFirstName(loggedInUser?.firstName);
    setLastName(loggedInUser?.lastName);
    setPhone(loggedInUser?.phoneNumber);
    setEmail(loggedInUser?.email);
  };

  const handlePhone = (value) => {
    // Only allows numbers - input
    const checkNumber = /^[0-9]*$/g;

    if (checkNumber.test(value)) {
      setPhone(value);
    }
  };

  // Common handler for all input fields (start edit icon)
  const handleEditInput = (e, input) => {
    // Resets all alerts when user toggles a new input field.
    setAlertEmptyInput(false);
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
    if (!firstName) {
      // If inputfield for firstName is empty, set alertEmptyInput to: true.
      setAlertEmptyInput(true);
      return;
    }

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
    if (!lastName) {
      // If inputfield for lastName is empty, set alertEmptyInput to: true.
      setAlertEmptyInput(true);
      return;
    }

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
    if (!phone) {
      // If inputfield for phone is empty, set alertEmptyInput to: true.
      setAlertEmptyInput(true);
      return;
    }

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

  // Props
  const values = {
    loggedInUser,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    editInput,
    setEditInput,
    alertEmptyInput,
    setAlertEmptyInput,
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
    handlePhone,
    handleEditInput,
    handleFirstNameConfirmEdit,
    handleLastNameConfirmEdit,
    handlePhoneConfirmEdit,
    handlePasswordConfirmEdit,
    handleEmailEdit,
  };

  return (
    <form className={styles.form}>
      <ProfileFormInputFields values={values} />
      {/* Input fields */}
      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <ProfileFormAlertBoxes values={values} />
          {/* Alert boxes */}
        </Col>
      </Row>
    </form>
  );
};

export default ProfileForm;
