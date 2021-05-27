import styles from "../css/ProfilePage.module.css";
import ProfileInformation from "../components/profile/ProfileInformation";
import ReservationListing from "../components/profile/ReservationListing";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Container className={`${styles.profile_container} mt-5`} fluid>
      <div id={styles.profile_information_wrapper}>
        <ProfileInformation />
      </div>
      <div id={styles.profile_reservation_wrapper}>
        <ReservationListing />
      </div>
    </Container>
  );
};

export default ProfilePage;
