import styles from "../css/ProfilePage.module.css";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Container fluid>
      <div className={styles.profile_information_wrapper}></div>
      <div className={styles.profile_reservation_wrapper}></div>
    </Container>
  );
};

export default ProfilePage;
