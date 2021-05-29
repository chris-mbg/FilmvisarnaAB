import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

import styles from "../css/MovieCard.module.css";
import CustomButton from "./CustomButton";
import { MovieContext } from "../contexts/MovieContext";

export default function MovieCard({ movie }) {
  const { getAllScreeningsForMovie } = useContext(MovieContext);
  const history = useHistory();

  const handleInfoClick = () => history.push(`/movies/${movie._id}`);

  const handleOrderClick = async (id) => {
    // ** to go to the order page for a specific movie. 
    // ** I find   ??THE FIRST ??? closest screening based on the film id
    let screenings = await getAllScreeningsForMovie(id);
    const screeningId = screenings[0]._id;
    history.push(`/order/${screeningId}`);
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
          <CustomButton
            clickHandler={() => handleOrderClick(movie._id)}
            text="Boka"
          />
        </div>
      </Card.Body>
    </Card>
  );
}
