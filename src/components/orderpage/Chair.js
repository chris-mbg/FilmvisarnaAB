import styles from "../../css/Chair.module.css";
import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";

const Chair = ({ row, seat, reserved }) => {
  // Context
  const { chosenSeats, setChosenSeats } = useContext(ReservationContext);

  // Handlers
  const handleChosenSeat = () => {
    const storedSeats = [...chosenSeats, [row, seat]];

    // Stores user's selected seats inside: "chosenSeats"
    setChosenSeats(storedSeats);
  };
  return (
    <div
      onClick={(e) => handleChosenSeat()}
      className={`${styles.chair_available} ${
        Boolean(reserved) && styles.chair_reserved
      }`}
    ></div>
  );
};

export default Chair;
