import React from "react";
import styles from "../css/MovieCard.module.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CustomButton from "./CustomButton";
import { Card } from "react-bootstrap";
import { ReservationContext } from "../contexts/ReservationContext";

export default function MovieCard({ movie }) {
  // Context
  const { setMovieOnOrderPage } = useContext(ReservationContext);
  // useHistory
  const history = useHistory();

  const handleInfoClick = () => history.push(`/movies/${movie._id}`);
  const handleOrderClick = () => {
    // Stores specific movie inside variable: movieOnOrderPage
    setMovieOnOrderPage(movie);

    // Re-directs user to OrderPage by movieId
    history.push(`/order/${movie._id}`);
  };

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
