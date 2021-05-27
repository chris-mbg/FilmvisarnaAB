import styles from "../../css/UserReservation.module.css";
import { useState } from "react";
import { Accordion, Button, Row, Col } from "react-bootstrap";

const UserReservation = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  return (
    <Accordion className={styles.reservation}>
      <Row className={styles.header_wrapper} noGutters={true}>
        <Col lg={10}>
          <p>
            Amelie <br />
            Ons, 19 2021 | 11:30
          </p>
        </Col>
        <Col lg={2} className="d-flex justify-content-end">
          <Accordion.Toggle
            // onClick={() => setToggleAccordion(!toggleAccordion)}
            eventKey="0"
            as={"button"}
            className="d-flex justify-content-end"
          >
            <i
              onClick={() => setToggleAccordion(!toggleAccordion)}
              class="fas fa-arrow-down"
            ></i>
          </Accordion.Toggle>
        </Col>
      </Row>
      <hr className={styles.hr} />
      {/* /.header_wrapper */}

      <Accordion.Collapse eventKey="0">
        <div>
          <Row className={styles.description_wrapper} noGutters={true}>
            <Col>Image</Col>
            <Col>
              <p>
                Dramakomedi
                <br /> Längd: 2.25
              </p>
            </Col>
          </Row>
          {/* /.description_wrapper */}
          <hr className={styles.hr} />
          <Row className={styles.auditoria_wrapper} noGutters={true}>
            <Col>
              <p>Salong</p>
            </Col>
            <Col>
              <p>Rad och stolsnummer</p>
            </Col>
          </Row>
          {/* /.auditoria_wrapper */}
          <hr className={styles.hr} />
          <Row className={styles.summary_wrapper} noGutters={true}>
            <Col>
              <p>Antal personer:</p>
              <p>Totalpris(SEK):</p>
            </Col>
            <Col>
              <p>Order:</p>
            </Col>
          </Row>
          {/* /.summary_wrapper */}
          <Row className={styles.button_wrapper} noGutters={true}>
            <Col>
              <Button>Avboka</Button>
            </Col>
          </Row>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default UserReservation;
