import styles from "../css/OrderPage.module.css";
import { Container } from "react-bootstrap";
import ScreeningPicker from "../components/orderpage/ScreeningPicker";

export default function OrderPage() {
  return (
    <Container className="mt-5" fluid>
      <h2>Boka biljetter</h2>
      <ScreeningPicker />
    </Container>
  );
}
