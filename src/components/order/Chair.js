import React, { useEffect, useState, useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import { Row, Col } from "react-bootstrap";
import styles from "./styles/Chair.module.css";

export default function Chair({
  reserved,
  row,
  seat,
  detailsSelectedChair,
  deailsOrderedChair,
}) {
  const { ticketsChosen, setTicketsChosen } = useContext(ReservationContext);

  const [isChosen, setIsChosen] = useState(false);

  const handleChairClick = (seatNr) => {
    if (reserved) {
      return;
    } else {
      setIsChosen((prevState) => !prevState);
      console.log("You clicked a seat", seatNr);

      // Check if seatNr is previously chosen by user
      if (
        ticketsChosen.some(
          (ticket) =>
            ticket.seatNumber[0] === seatNr[0] &&
            ticket.seatNumber[1] === seatNr[1]
        )
      ) {
        // If seatNr prev chosen, filter out from the ticketsChosen array
        setTicketsChosen(
          ticketsChosen.filter((ticket) =>
            ticket.seatNumber[0] === seatNr[0] &&
            ticket.seatNumber[1] === seatNr[1]
              ? false
              : true
          )
        );
      } else {
        // If not, spread prevState and create new object in array with the clicked searNr
        setTicketsChosen((prevState) => [
          ...prevState,
          { ticketType: "adult", seatNumber: seatNr },
        ]);
      }
    }
  };

  return (
    <>
      {detailsSelectedChair && (
        <>
          <Row>
            <Col
              sm={12}
              md={6}
              className="d-flex align-items-center justify-content-center justify-content-md-end"
            >
              <div className={`${styles.chairItem}  ${styles.chosen}`}></div>
              <span className={styles.spanDescrittions}>Vald plats</span>
            </Col>
          </Row>
        </>
      )}

      {deailsOrderedChair && (
        <Row>
          <Col
            sm={12}
            md={6}
            className="d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <div className={`${styles.chairItem}  ${styles.reserved}`}></div>
            <span className={styles.spanDescrittions}>Bokad plats</span>
          </Col>
        </Row>
      )}
      {!detailsSelectedChair && !deailsOrderedChair && (
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
      )}
    </>
  );
}
