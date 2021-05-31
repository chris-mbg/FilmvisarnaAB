import styles from "../../css/Tickets.module.css";
import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../CustomButton";
import moment from "moment";
import "moment/locale/sv";

const Tickets = () => {
  // Context
  const { chosenSeats, movieOnOrderPage, screeningToShow } =
    useContext(ReservationContext);
  console.log(screeningToShow);
  const ticket =
    chosenSeats &&
    chosenSeats.map((seat) => {
      return (
        <Container className={styles.ticket_container} fluid>
          <Row noGutters={true}>
            <Col lg={5}>
              <p>
                <span>{movieOnOrderPage && movieOnOrderPage.title} </span>
                <br />
                <span>
                  {screeningToShow &&
                    moment(screeningToShow.startTime).format("lll")}
                </span>
              </p>
            </Col>
            <Col lg={5}>Vuxen, pensionär, barn</Col>
            <Col className={styles.icon_wrapper} lg={2}>
              <i className={`${styles.icon} fa fa-trash`}></i>
            </Col>
          </Row>
          <Row noGutters={true}>
            <Col>
              <ul className={styles.ul}>
                <li>
                  Rad: {seat[0]}, Stol: {seat[1]}
                </li>
              </ul>
            </Col>
            <Col>Pris: {screeningToShow && screeningToShow.price} :-</Col>
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
        <div className={styles.button_wrapper}>
          <CustomButton text="Boka" />
        </div>
      </div>
      {/* /ticket_wrapper_bottom */}
    </div>
  );
};

export default Tickets;
