import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./CustomButton";
import styles from "../css/BookButton.module.css"

const BookButton = ({ movieId, movieTitle, screeningId = null }) => {

  const { loggedInUser } = useContext(UserContext);
  const { setMovieOnOrderPage, setScreeningIdOnOrderPage } = useContext(ReservationContext);
  const history = useHistory();

  const bookButtonClick = () => {
    if(loggedInUser) {
      setMovieOnOrderPage({movieId, movieTitle});
      if(screeningId) {
        setScreeningIdOnOrderPage(screeningId);
      }
      history.push("/order");
    }
  }

  return (
    <div className={loggedInUser ? `${styles.bookButton}` : `${styles.bookButton} ${styles.tooltip} ${styles.disabled}`}>
      <CustomButton text={"Boka"} clickHandler={bookButtonClick}/>
      {!loggedInUser && <span className={styles.tooltiptext}>Logga in för att boka biljetter!</span>}
    </div>
  );
}

export default BookButton;