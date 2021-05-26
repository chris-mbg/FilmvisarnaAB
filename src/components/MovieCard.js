import React from "react";
import { Card } from "react-bootstrap";
import styles from "../css/MovieCard.module.css";
import CustomButton from "./CustomButton";
import { useHistory } from "react-router-dom";

export default function MovieCard({ movie }) {
  const history = useHistory();

  const handleClick = (src) => {
    console.log("clicked", src);
    history.push(src);
  };

  const handleInfoClick = () => {
    console.log("clicked info");
    history.push(`/movies/${movie._id}`);
  };
  const handleOrderClick = () => {
    console.log("clicked order");
    history.push("/order");
  };

  return (
    <Card className={`${styles.cardWrapper} mb-2 col-md-6 col-lg-4 `}>
      <Card.Img style={{ maxHeight: "350px" }} src={movie.image} />
      <Card.Body className={styles.bodyWrapper}>
        <Card.Title className={styles.title}>{movie.title}</Card.Title>
        <Card.Text>{movie.genre}</Card.Text>
        <Card.Text>Längd: {movie.length}</Card.Text>
        <div className="d-flex justify-content-between mt-4">
          {/* because this component is representative of the CustomButton components,  (not the element itself), I cannot add an onClick function on it. So I wrapped him in div */}
          {/* <div onClick={() => handleClick(`/movies/${movie._id}`)}>
            <CustomButton text="Info" />
          </div>
          <div  onClick={() => handleClick(`/order`)}>
            <CustomButton text="Boka"/>
          </div> */}
          <CustomButton clickHandler={handleInfoClick} text="Info" />
          <CustomButton clickHandler={handleOrderClick} text="Boka"/>
        </div>
      </Card.Body>
    </Card>
  );
}
