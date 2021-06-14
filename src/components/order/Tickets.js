import { useContext, useEffect, useState } from "react";
import styles from "./styles/Tickets.module.css";
import { ReservationContext } from "../../contexts/ReservationContext";
import { Container, Row, Col, Modal } from "react-bootstrap";
import CustomButton from "../CustomButton";
import moment from "moment";
import "moment/locale/sv";
import ConfirmModal from "./ConfirmModal";
import { useHistory } from "react-router-dom";

const Tickets = () => {
  const [userConfirmationInfo, setUserConfirmationInfo] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Context
  const {
    ticketsChosen,
    setTicketsChosen,
    screeningToShow,
    userConfirmsReservation,
    getTotalPrice,
  } = useContext(ReservationContext);

  const history = useHistory();

  useEffect(() => {}, [userConfirmationInfo]);

  const handleCloseConfirmModal = () => {
    // When user click on OK button, ConfirmModal will close.
    setShowConfirmModal(false);

    //  Re-directs user to start page after closing ConfirmModal.
    history.push("/");
  };

  const handleConfirmClick = async () => {
    let result = await userConfirmsReservation();
    if (!result) {
      console.log("Something went wrong, error with booking tickets");
    } else {
      console.log("result", result);
      // Saves user recent reservation inside state variable: userConfirmationInfo
      setUserConfirmationInfo(result);

      // If booking is confirmed, show ConfirmModal.
      setShowConfirmModal(true);
    }
  };

  const handleSelectTicketType = (e, ticket) => {
    // Create a copy of state variable: ticketsChosen
    let newList = [...ticketsChosen];

    // Find index of current ticket.
    const findIndex = newList.indexOf(ticket);

    // New ticket object based on selected ticket type.
    const newObject = {
      ticketType: e.target.value,
      seatNumber: ticket.seatNumber,
    };

    // Replaces object in array based on:
    // 1. index of current ticket.
    // 2. current selected ticket type.
    newList.splice(findIndex, 1, newObject);

    // Set ticketsChosen to: newList
    setTicketsChosen(newList);
  };

  // Renders each ticket that the user has selected from screening.
  const ticket =
    ticketsChosen &&
    ticketsChosen.map((ticket, index) => {
      return (
        <>
          <Container className={styles.ticket_container} fluid key={index}>
            <Row className={styles.ticket_container_upper} noGutters={true}>
              <Col>
                <p>
                  <span>{screeningToShow.movieId.title} </span>
                  <br />
                  <span>{moment(screeningToShow.startTime).format("lll")}</span>
                </p>
              </Col>
              <Col>
                <Row noGutters={true}>
                  <Col lg={6}>
                    <input
                      defaultChecked={true}
                      type="radio"
                      name={`ticket` + index}
                      value="adult"
                      onChange={(e) => handleSelectTicketType(e, ticket)}
                    />
                    <label className="pl-2">Vuxen</label>
                  </Col>
                  <Col lg={6}>
                    <input
                      type="radio"
                      name={`ticket` + index}
                      value="senior"
                      onChange={(e) => handleSelectTicketType(e, ticket)}
                    />
                    <label className="pl-2">Pensionär</label>
                  </Col>
                  <Col lg={6}>
                    <input
                      type="radio"
                      name={`ticket` + index}
                      value="child"
                      onChange={(e) => handleSelectTicketType(e, ticket)}
                    />
                    <label className="pl-2">Barn</label>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* /.ticket_upper_container */}
            <Row className={styles.ticket_container_lower} noGutters={true}>
              <Col>
                <ul className={styles.ul}>
                  <li>
                    Rad: {ticket.seatNumber[0] + 1}, Plats:{" "}
                    {ticket.seatNumber[1] + 1}
                  </li>
                </ul>
              </Col>
              <Col>
                Pris:{" "}
                {ticket.ticketType === "adult"
                  ? screeningToShow.price
                  : ticket.ticketType === "senior"
                  ? screeningToShow.price * 0.8
                  : screeningToShow.price * 0.7}{" "}
                kr
              </Col>
            </Row>
            {/* /.ticket_lower_container */}
          </Container>
        </>
      );
    });

  return (
    <>
      {screeningToShow && (
        <div className={`${styles.tickets_wrapper}`}>
          <div className={styles.ticket_wrapper_upper}>
            <h2 className={styles.title}>Valda biljetter</h2>
            {ticket}
          </div>
          {/* ticket_wrapper_upper */}
          <div className={styles.ticket_wrapper_bottom}>
            <hr className={styles.hr} />
            {ticketsChosen.length > 0 && (
              <p className={styles.price}>
                Total pris:{" "}
                <span>
                  {getTotalPrice(ticketsChosen, screeningToShow.price)}
                </span>{" "}
                kr
              </p>
            )}
            {/* <div className={styles.button_wrapper}>
              <CustomButton text="Boka" />
              </div> */}
            {ticketsChosen.length > 0 && (
              <div className="d-flex justify-content-center mt-4">
                <CustomButton
                  text="Boka biljetter"
                  clickHandler={handleConfirmClick}
                />
              </div>
            )}
          </div>
          {/* /ticket_wrapper_bottom */}
          <Modal
            centered={true}
            size={"lg"}
            show={showConfirmModal}
            onHide={handleCloseConfirmModal}
          >
            <ConfirmModal
              userConfirmationInfo={userConfirmationInfo}
              handleCloseConfirmModal={handleCloseConfirmModal}
            />
          </Modal>
        </div>
      )}
    </>
  );
};
export default Tickets;
