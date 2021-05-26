import styles from "../css/ProfilePage.module.css";
import ProfileInformation from "../components/profile/ProfileInformation";
import { Container } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Container className="mt-5" fluid>
      <div id={styles.profile_information_wrapper}>
        <ProfileInformation />
      </div>
      <div id={styles.profile_reservation_wrapper}></div>
    </Container>
  );
};

export default ProfilePage;
