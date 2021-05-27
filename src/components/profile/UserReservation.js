import styles from "../../css/UserReservation.module.css";
import { useState } from "react";
import { Accordion, Row, Col, Image } from "react-bootstrap";

const UserReservation = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const icon = !toggleAccordion ? (
    <i className={`${styles.icon} fas fa-arrow-down`} />
  ) : (
    <i className={`${styles.icon} fas fa-arrow-up`} />
  );

  return (
    <Accordion className={styles.reservation}>
      <Row className={styles.header_wrapper} noGutters={true}>
        <Col lg={10}>
          <p className={styles.header_information}>
            Amelie <br />
            Ons, 19 2021 | 11:30
          </p>
        </Col>
        <Col lg={2} className="d-flex justify-content-end align-items-center">
          <div className={styles.icon_wrapper}>
            <Accordion.Toggle
              onClick={() => setToggleAccordion(!toggleAccordion)}
              eventKey="0"
              as={"span"}
            >
              {icon}
            </Accordion.Toggle>
          </div>
        </Col>
      </Row>
      {/* /.header_wrapper */}

      <Accordion.Collapse eventKey="0">
        <div>
          <hr className={styles.hr} />
          <Row className={styles.movie_wrapper} noGutters={true}>
            <Col lg={3}>
              <Image
                className={styles.movie_image}
                src="https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
                alt="image"
              />
            </Col>
            <Col className="d-flex align-items-center">
              <p className={styles.movie_information}>
                Dramakomedi
                <br /> Längd: 225min
              </p>
            </Col>
          </Row>
          {/* /.movie_wrapper */}
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
                Rad och stolsnummer
              </p>
              <ul className={styles.ul}>
                <li>Rad 2, Stol 3</li>
                <li>Rad 2, Stol 4</li>
                <li>Rad 2, Stol 5</li>
              </ul>
            </Col>
          </Row>
          {/* /.auditoria_wrapper */}
          <hr className={styles.hr} />

          <Row className={styles.summary_wrapper} noGutters={true}>
            <Col>
              <p className={styles.summary_information}>
                Antal personer:{" "}
                <span className={styles.sub_information}>3</span>
              </p>
              <p className={styles.summary_information}>
                Totalpris (SEK) :{" "}
                <span className={styles.sub_information}>200:-</span>
              </p>
            </Col>
            <Col>
              <p className={styles.order_information}>
                Order:{" "}
                <span className={styles.sub_information}>
                  #60acbc58b7b50656ccec8734
                </span>
              </p>
            </Col>
          </Row>
          {/* /.summary_wrapper */}

          <Row noGutters={true}>
            <Col className={styles.button_wrapper}>
              <button className="cancelButton">Avboka</button>
            </Col>
            {/* /.button_wrapper */}
          </Row>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default UserReservation;
