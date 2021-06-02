import React, { useEffect, useState, useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import styles from "./Chair.module.css";

export default function Chair({ reserved, row, seat }) {
  const { seatsChosen, setSeatsChosen } = useContext(ReservationContext);

  const [isChosen, setIsChosen] = useState(false);

  const handleChairClick = (seatNumber) => {
    if (reserved) {
      console.log("Not bookable...");
    } else {
      setIsChosen((prevState) => !prevState);
      console.log("You clicked a seat", seatNumber);
      // send seatNumber to ReservationContext/set variable in ReservationContext
      const alreadyPicked = seatsChosen.some(
        (seat) => seat[0] === seatNumber[0] && seat[1] === seatNumber[1]
      );
      console.log(alreadyPicked);
      if (alreadyPicked) {
        setSeatsChosen(
          seatsChosen.filter((seat) =>
            seat[0] === seatNumber[0] && seat[1] === seatNumber[1]
              ? false
              : true
          )
        );
      } else {
        setSeatsChosen((prevState) => [...prevState, seatNumber]);
      }
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
          {reserved ? (
            <span>Redan bokad! </span>
          ) : (
            <span>
              Rad: <strong>{row + 1}</strong> {""}
              Plats: <strong>{seat + 1} </strong>{" "}
            </span>
          )}
        </span>
      </div>
    </>
  );
}
