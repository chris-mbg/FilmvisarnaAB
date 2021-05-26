import React from "react";
import { Card } from "react-bootstrap";
import styles from "../css/MovieCard.module.css";
import CustomButton from "./CustomButton";

export default function MovieCard({ movie }) {
  return (
    <Card className={`${styles.cardWrapper} mb-2 col-md-6 col-lg-4 `}>
      <Card.Img style={{maxHeight:"350px"}} src={movie.image} />
      <Card.Body className={styles.bodyWrapper}>
        <Card.Title className={styles.title}>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>
        <Card.Text>Längd: {movie.length}</Card.Text>
        <div className="d-flex justify-content-between mt-4">
          <CustomButton text="Info" />
          <CustomButton text="Boka" />
        </div>
      </Card.Body>
    </Card>
  );
}
