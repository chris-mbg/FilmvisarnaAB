import React from "react";
import { Card } from "react-bootstrap";
import styles from "../css/MovieCard.module.css";
import CustomButton from "./CustomButton";
import { useHistory } from "react-router-dom";

export default function MovieCard({ movie }) {
  const history = useHistory();

  const handleInfoClick = () => history.push(`/movies/${movie._id}`);
  const handleOrderClick = () => history.push("/order");

  return (
    <Card className={`${styles.cardWrapper} mb-2 col-md-6 col-lg-4 `}>
      <Card.Img style={{ maxHeight: "350px" }} src={movie.image} />
      <Card.Body className={styles.bodyWrapper}>
        <Card.Title className={styles.title}>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>
        <Card.Text>Längd: {movie.length}</Card.Text>
        <div className="d-flex justify-content-between mt-4">
          <CustomButton clickHandler={handleInfoClick} text="Info" />
          <CustomButton clickHandler={handleOrderClick} text="Boka" />
        </div>
      </Card.Body>
    </Card>
  );
}
