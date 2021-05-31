import React, { useState } from "react";
import styles from "./Chair.module.css";

export default function Chair({ reserved, row, seat }) {
  const [isChosen, setIsChosen] = useState(false);

  const handleChairClick = (seatNumber) => {
    if (reserved) {
      console.log("Not bookable...");
    } else {
      setIsChosen((prevState) => !prevState);
      console.log("You clicked a seat", seatNumber);
      // send seatNumber to ReservationContext/set variable in ReservationContext
    }
  };

  return (
    <>
      <div
        className={
          reserved
            ? `${styles.chairItem}  ${styles.reserved}`
            : isChosen
            ? `${styles.chairItem}  ${styles.chosen}`
            : `${styles.chairItem}`
        }
        onClick={() => handleChairClick([row, seat])}
      >
        <span className={styles.tooltip}>
          {reserved ? <span>Redan bokad! </span> : <span>Rad: <strong>{row + 1}</strong> {""}
          Stol: <strong>{seat + 1} </strong> </span>}
        </span>
      </div>
    </>
  );
}
