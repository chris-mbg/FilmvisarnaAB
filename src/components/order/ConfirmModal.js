import styles from "../../css/ConfirmModal.module.css";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReservationContext } from "../../contexts/ReservationContext";

const ConfirmModal = () => {
  // Context
  const { userReservations } = useContext(ReservationContext);

  const reservation = (
    <Container fluid className={styles.reservation}>
      <Row className={styles.reservation_header_wrapper} noGutters={true}>
        <Col>
          <p className={styles.reservation_header_information}>
            Filmtitel <br />
            2021-07-21
          </p>
        </Col>
      </Row>
      {/* /.reservation_header_wrapper */}
      <hr className={styles.hr} />

      <Row className={styles.auditoria_wrapper} noGutters={true}>
        <Col>
          <p className={styles.auditoria_information}>
            Salong: <br />
            <span className={styles.sub_information}>Stora salongen</span>
          </p>
        </Col>
        <Col>
          <p className={styles.auditoria_seats_information}>
            Rad och platsnummer
          </p>
          <ul className={styles.ul}>
            <li>Rad: 1, Plats: 2</li>
          </ul>
        </Col>
      </Row>
      {/* /.auditoria_wrapper */}
      <hr className={styles.hr} />

      <Row className={styles.summary_wrapper} noGutters={true}>
        <Col>
          <p className={styles.summary_information}>
            Antal biljetter: <span className={styles.sub_information}>3st</span>
          </p>
          <p className={styles.summary_information}>
            Totalpris (SEK) :{" "}
            <span className={styles.sub_information}>220:-</span>
          </p>
        </Col>
        <Col>
          <p className={styles.order_information}>
            Order: <span className={styles.sub_information}>#123231</span>
          </p>
        </Col>
      </Row>
      {/* /.summary_wrapper */}
    </Container>
  );

  return (
    <div className={styles.modal_container}>
      <h2 className={styles.header}>Biljetter bokade!</h2>
      {reservation}
      <div className={styles.button_confirm_wrapper}>
        <button className={`${styles.button_confirm} btn`}>OK</button>
      </div>
      {/* /.button_wrapper */}
    </div>
  );
};

export default ConfirmModal;
