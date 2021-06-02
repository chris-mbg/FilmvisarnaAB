import styles from "./styles/Tickets.module.css";
import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../CustomButton";
import moment from "moment";
import "moment/locale/sv";

const Tickets = () => {
  // Context
  const {
    seatsChosen,
    movieOnOrderPage,
    screeningToShow,
    userConfirmsReservation,
  } = useContext(ReservationContext);
  // Handler
  const handleConfirmClick = async () => {
    let result = await userConfirmsReservation();
    if (!result) {
      console.log("Something went wrong, error with booking tickets");
    } else {
      alert("Tickets booked", result);
    }
  };

  // Renders each ticket that the user has selected from screening.
  const ticket =
    seatsChosen &&
    seatsChosen.map((seat) => {
      return (
        <Container className={styles.ticket_container} fluid>
          <Row noGutters={true}>
            <Col lg={5}>
              <p>
                <span style={{border: "1px solid red"}}>{movieOnOrderPage && movieOnOrderPage.title} </span>
                <br />
                <span>
                  {screeningToShow &&
                    moment(screeningToShow.startTime).format("lll")}
                </span>
              </p>
            </Col>
            {/* <Col lg={5}>Vuxen, pensionär, barn</Col> */}
          </Row>
          <Row noGutters={true}>
            <Col>
              <ul className={styles.ul}>
                <li>
                  Rad: {seat[0] + 1}, Stol: {seat[1] + 1}
                </li>
              </ul>
            </Col>
            <Col>
            Pris: {screeningToShow && screeningToShow.price} :-</Col>
          </Row>
        </Container>
      );
    });

  return (
    <div className={`${styles.tickets_wrapper}`}>
      <div className={styles.ticket_wrapper_upper}>
        <h2 className={styles.title}>Valda biljetter</h2>
        {ticket}
      </div>
      {/* ticket_wrapper_upper */}
      <hr className={styles.hr} />
      <div className={styles.ticket_wrapper_bottom}>
        <p className={styles.price}>
          Total pris (SEK) : <span></span>{" "}
        </p>
        {/* <div className={styles.button_wrapper}>
          <CustomButton text="Boka" />
        </div> */}
        {seatsChosen.length > 0 && (
          <div className="text-center mt-4">
            <CustomButton
              text="Boka biljetter"
              clickHandler={handleConfirmClick}
            />
          </div>
        )}
      </div>
      {/* /ticket_wrapper_bottom */}
    </div>
  );
};

export default Tickets;
