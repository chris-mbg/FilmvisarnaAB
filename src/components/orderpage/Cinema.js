import styles from "../../css/Cinema.module.css";
import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";

const Cinema = () => {
  const { screeningToShow } = useContext(ReservationContext);
  return <div></div>;
};

export default Cinema;
