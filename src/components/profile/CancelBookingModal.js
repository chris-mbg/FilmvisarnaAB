import styles from "../../css/CancelBookingModal.module.css";
import { Modal } from "react-bootstrap";
import moment from "moment";
import "moment/locale/sv";

const CancelBookingModal = ({ reservation, setShowCancelBookingModal }) => {
  return (
    <div className={`${styles.cancel_reservation_modal} rounded`}>
      <h2 className={styles.modal_header}>
        Vill du avboka följande reservation?
      </h2>
      <Modal.Body>
        <p className={styles.content_text}>
          Order:{" "}
          <span className={styles.sub_information}>#{reservation?._id}</span>{" "}
          <br />
          {reservation?.movie?.title} <br />
          {moment(reservation?.screening?.startTime).locale("sv").format("LLL")}
        </p>
      </Modal.Body>
      <Modal.Footer className={styles.modal_footer}>
        <button
          className={`${styles.cancel_button} btn`}
          onClick={() => setShowCancelBookingModal(false)}
        >
          Avbryt
        </button>
        <button className={`${styles.confirm_button} btn`}>Bekräfta</button>
      </Modal.Footer>
    </div>
  );
};

export default CancelBookingModal;
