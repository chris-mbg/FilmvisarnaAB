import styles from "../../css/Cinema.module.css";
import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";

const Cinema = () => {
  const { screeningToShow } = useContext(ReservationContext);

  console.log(screeningToShow);
  // renderSeats = screeningToShow.map();

  return <div className={styles.cinema_wrapper}></div>;
};

export default Cinema;
