import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Row, Col, Image } from "react-bootstrap";

import styles from "../css/MoviePage.module.css";
import CustomButton from "../components/CustomButton";
import MovieSchedule from "../components/MovieSchedule";

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

  const seeTrailer = () => {
    console.log("this is a wonderful trailer...");
  };

  const renderMovieDescription = () => (
    <section className={styles.movieContainer}>
      <Row className="text-center">
        <Col sm={12} md={6} lg={3}>
          <Image src={movie.image} fluid />
        </Col>
        <Col sm={12} md={6} lg={9}>
          <div className=" row flex-column-reverse flex-md-row">
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
            <CustomButton
              text="Trailer"
              className="order-md-last"
              clickHandler={seeTrailer}
            />
          </div>
        </Col>
      </Row>
    </section>
  );

  return (
  <>
  {movie ? renderMovieDescription() : <h1>...loading</h1>}
  <MovieSchedule/>
  </>);
}
