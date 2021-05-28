import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Row, Col, Image } from "react-bootstrap";

import styles from "../css/MoviePage.module.css";
import CustomButton from "../components/CustomButton";
import MovieSchedule from "../components/MovieSchedule";

export default function MoviePage(props) {
  const { movieId } = props.match.params;
  const [movie, setMovie] = useState(null);
  const [screenings, setScreening] = useState(null);

  const { getMovieById, getAllScreeningsForMovie } = useContext(MovieContext);

  useEffect(async () => {
    let response = await getMovieById(movieId);
    setMovie(response);
    // todo delete after test
    console.log("movie", response);

    let schedule = await getAllScreeningsForMovie(response._id);
    setScreening(schedule);
    // todo delete after test
    console.log(schedule);
  }, []);

  
  /*
   **{params} = multidimensional array
   **{return} = number or string
   */
  const getReservedPlaces = (seats) => {
    //  flat() returns a new array in which all the elements of the nested subarrays have been recursively "hoisted", then added values together ( 0 + 0 + 1 + 0 + ...)
    let reservedPlaces = seats
      .flat()
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return reservedPlaces ? reservedPlaces : "0";
  };

  // todo connect trailer
  const seeTrailer = () => {
    console.log("this is a wonderful trailer...");
  };

  const renderMovieDescription = () => (
    <section className={styles.movieContainer}>
      <Row className="text-center">
        <Col sm={12} md={6} lg={5}>
          <Image src={movie.image} fluid />
        </Col>
        <Col sm={12} md={6} lg={7}>
          <div className=" row flex-column-reverse flex-md-row">
            <div className={styles.description}>
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <p>Åldersgräns: {movie.ageLimit}</p>
              <p>Direktör: {movie.director} </p>
              <p>
                Skådespelare:{" "}
                {movie.actors.map((actor) => (
                  <span>{actor} &#183; </span>
                ))}
              </p>
              <p>Språk: {movie.language}</p>
              <p>
                {" "}
                Produktion Länder:{" "}
                {movie.productionCountries.map((country) => (
                  <span>{country}</span>
                ))}
              </p>
              <p>
                Sammanfattning: <span>{movie.productionYear}</span>
                &#183;<span>{movie.length}</span>
              </p>
              <p>Genre:{movie.genre}</p>
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
      {movie ? renderMovieDescription() : <h2>...loading</h2>}
      {screenings ? (
        screenings.map((screen) => (
          <MovieSchedule
            isMoviePage={true}
            date={new Date(screen.startTime)
              .toLocaleString("sv-SE")
              .slice(0, 11)}
            time={new Date(screen.startTime)
              .toLocaleString("sv-SE")
              .slice(11, 16)}
            // flat() returns a new array in which all the elements of the nested subarrays have been recursively "hoisted"
            totalPlaces={screen.seats.flat(Infinity).length}
            reservedPlaces={getReservedPlaces(screen.seats)}
            auditorium={screen.auditoriumName}
          />
        ))
      ) : (
        <h2>...loading</h2>
      )}
    </>
  );
}
