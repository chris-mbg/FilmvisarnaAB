import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Row, Col, Image } from "react-bootstrap";

import styles from "../css/MoviePage.module.css";
import CustomButton from "../components/CustomButton";

export default function MoviePage(props) {
  const { movieId } = props.match.params;
  const [movie, setMovie] = useState(null);
  const { getMovieById } = useContext(MovieContext);

  useEffect(async () => {
    let response = await getMovieById(movieId);
    setMovie(response);
    // todo delete after test
    console.log("movie", response);
  }, []);

  const renderMovieDescription = () => (
    <div className={styles.movieContainer}>
      <Row>
        <Col md={6} sm={12}>
          <Image src={movie.image} fluid />
        </Col>
        <Col md={6} sm={12}>
          <div className="row flex-column-reverse flex-md-row">
            <div className={styles.description}>
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <p>Director: {movie.director} </p>
              <p>Språk: {movie.language}</p>
              <p>
                Sammanfattning: <span>{movie.productionYear}</span>
                &#183;<span>{movie.length}</span>
              </p>
            </div>
            <CustomButton text="Trailer" className="order-md-last" />
          </div>
        </Col>
      </Row>
    </div>
  );

  return <>{movie ? renderMovieDescription() : <h1>...loading</h1>}</>;
}
