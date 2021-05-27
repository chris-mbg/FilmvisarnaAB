import styles from "../../css/ReservationList.module.css";
import UserReservation from "./UserReservation";

const ReservationList = () => {
  return (
    <div className={styles.listing_wrapper}>
      <h2 className={styles.title}>Bokade biljetter</h2>
      <UserReservation />
    </div>
  );
};

export default ReservationList;
