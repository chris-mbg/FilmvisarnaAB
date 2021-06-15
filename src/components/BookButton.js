import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import styles from "../css/BookButton.module.css"

const BookButton = ({ movieId, screeningId = null }) => {
console.log("INSIDE BOOK BUTTON",movieId, screeningId);
  const { loggedInUser, setShowLogin} = useContext(UserContext);
  const history = useHistory();

  const bookButtonClick = () => {
    if(loggedInUser) {
      history.push(`/order/${movieId}/${screeningId ? screeningId : ""}`);
    } else {
      setShowLogin(true)
    }
  };

  return (
    <div className={loggedInUser ? `${styles.bookButtonContainer}` : `${styles.bookButtonContainer} ${styles.tooltip} ${styles.disabled}`}>
      <CustomButton text={"Boka"} clickHandler={bookButtonClick}/>
      {!loggedInUser && <span className={styles.tooltiptext}>Logga in för att boka biljetter!</span>}
    </div>
  );
}

export default BookButton;