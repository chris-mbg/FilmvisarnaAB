import React from "react";
import { Card } from "react-bootstrap";
import styles from '../css/MovieCard.module.css'

export default function MovieCard() {
  return (
    <Card className={styles.cardWrapper}>
      <Card.Img  src="https://i.imgur.com/tytuFx3.png" />
      <Card.Body className={styles.bodyWrapper}>
        <Card.Title>  Amelie från Montmartre</Card.Title>
        <Card.Text>Dramakomedi</Card.Text>
        <Card.Text>Längd: 2.25</Card.Text>
        <button>Boka</button>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
