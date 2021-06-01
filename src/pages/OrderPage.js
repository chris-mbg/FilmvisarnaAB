import styles from "../css/OrderPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ScreeningPicker from "../components/order/ScreeningPicker";
import Cinema from "../components/order/Cinema";
import Tickets from "../components/order/Tickets";

export default function OrderPage() {
  return (
    <Container className="mt-5" fluid>
      <h2>Boka biljetter</h2>
      <ScreeningPicker />
      <div id={styles.content_wrapper}>
        <div id={styles.cinema_wrapper}>
          <Cinema />
        </div>
        <div id={styles.tickets_wrapper}>
          <Tickets />
        </div>
      </div>
    </Container>
  );
}
