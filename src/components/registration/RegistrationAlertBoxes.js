import { Alert } from "react-bootstrap";

const RegistrationAlertBoxes = ({ alerts }) => {
  // Props
  const {
    alertPassword,
    setAlertPassword,
    alertEmail,
    setAlertEmail,
    alertConfirmPassword,
    setAlertConfirmPassword,
  } = alerts;

  // Alert boxes
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

  const alertEmailBox = alertEmail && (
    <Alert variant="dark" onClose={() => setAlertEmail(false)} dismissible>
      <p>Välj en annan e-post!</p>
    </Alert>
  );

  return (
    <>
      {alertEmailBox}
      {alertPasswordBox}
      {alertConfirmPasswordBox}
    </>
  );
};

export default RegistrationAlertBoxes;
