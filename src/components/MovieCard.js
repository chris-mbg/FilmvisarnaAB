import React from "react";
import { Card } from "react-bootstrap";
import styles from '../css/MovieCard.module.css'
import CustomButton from './CustomButton';

export default function MovieCard() {
  return (
    <Card className={`${styles.cardWrapper} mb-2 col-md-6 col-lg-4`}>
      <Card.Img  src="https://i.imgur.com/tytuFx3.png" />
      <Card.Body className={styles.bodyWrapper}>
        <Card.Title>  Amelie från Montmartre</Card.Title>
        <Card.Text>Dramakomedi</Card.Text>
        <Card.Text>Längd: 2.25</Card.Text>
        <div className="d-flex justify-content-between mt-4">
          <CustomButton text="Info"/>
          <CustomButton text="Boka"/>
        </div>
      </Card.Body>
    </Card>
  );
}
