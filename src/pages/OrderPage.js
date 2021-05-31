import styles from "../css/OrderPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ScreeningPicker from "../components/orderpage/ScreeningPicker";
import Cinema from "../components/orderpage/Cinema";

export default function OrderPage() {
  return (
    <Container className="mt-5" fluid>
      <h2>Boka biljetter</h2>
      <ScreeningPicker />
      <div className={styles.content_wrapper}>
        <Row>
          <Col>
            <Cinema />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
