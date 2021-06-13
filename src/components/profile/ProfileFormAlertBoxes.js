import { Alert } from "react-bootstrap";

const ProfileFormAlertBoxes = ({ values }) => {
  // Props
  const {
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
  } = values;

  // Alert boxes
  const alertConfirmBox = alertConfirm && (
    <Alert variant="dark" onClose={() => setAlertConfirm(false)} dismissible>
      <p>Din profil är nu ändrad!</p>
    </Alert>
  );

  const alertPasswordBox = alertPassword && (
    <Alert variant="dark" onClose={() => setAlertPassword(false)} dismissible>
      <p>
        Försök igen! <br />
        Ditt lösenord måste innehålla minst 8 tecken, varav en stor bokstav, en
        siffra, ett specialtecken.
      </p>
    </Alert>
  );

  const alertConfirmPasswordBox = alertConfirmPassword && (
    <Alert
      variant="dark"
      onClose={() => setAlertConfirmPassword(false)}
      dismissible
    >
      <p>
        Försök igen! <br />
        Ditt lösenord måste matcha med varandra.
      </p>
    </Alert>
  );

  const alertEmailExistsBox = alertEmailExists && (
    <Alert
      variant="dark"
      onClose={() => setAlertEmailExists(false)}
      dismissible
    >
      <p>Välj en annan e-post!</p>
    </Alert>
  );

  const alertEmailInvalidBox = alertEmailInvalid && (
    <Alert
      variant="dark"
      onClose={() => setAlertEmailInvalid(false)}
      dismissible
    >
      <p>
        Försök igen! <br />
        Din e-post måste innehålla en @ symbol följd utav en domännamn.
      </p>
    </Alert>
  );
  return (
    <>
      {alertConfirmBox}
      {alertPasswordBox}
      {alertConfirmPasswordBox}
      {alertEmailExistsBox}
      {alertEmailInvalidBox}
    </>
  );
};

export default ProfileFormAlertBoxes;
